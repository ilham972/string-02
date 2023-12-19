import { faker } from "@faker-js/faker";
import { getClient } from "@/db";
import bcrypt from "bcrypt";

async function loadFakeData(numUsers: number) {
  console.log(`loading ${numUsers} users..`);

  const client = await getClient();
  try {
    console.log("Connected successfully");
    await client.query("begin");

    for (let i = 0; i < numUsers; i++) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash("password", saltRounds);

      const username = faker.internet.userName();
      const avatar = faker.image.avatar();
      await client.query(
        "INSERT INTO users (username, password, avatar) VALUES ($1, $2, $3)",
        [username, hashedPassword, avatar]
      );
    }
    console.log(`inserted ${numUsers} fake users.`);

    // get lastly created "numUsers"
    const users = await client.query(
      "SELECT id FROM users ORDER BY id DESC LIMIT $1",
      [numUsers]
    );
    //generate random post out of 10(use Math.random * 10) fake post(user_id , content) for each one using for loop, use parameterized query
    for (const user of users.rows) {
      for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
        const content = faker.lorem.sentence();
        await client.query(
          "INSERT INTO posts (user_id, content) VALUES ($1, $2)",
          [user.id, content]
        );
      }
    }
    console.log(`inserted  fake posts every one randomly`);

    // now generate for follows table, insert query(follower_id, user_id), before query check if they same user using if statement after randomly follow or not so use Math.random > 0.5
    for (const user of users.rows) {
      for (const otherUser of users.rows) {
        if (user.id !== otherUser.id && Math.random() > 0.5) {
          await client.query(
            "INSERT INTO follows (follower_id, user_id) VALUES ($1, $2)",
            [user.id, otherUser.id]
          );
        }
      }
    }
    console.log(`inserted fake follows`);

    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    console.error(error);
    await client.end();
  }
  await client.end();
  console.log("Disconnected successfully");
}

const numUsers = parseInt(process.argv[2]);

loadFakeData(numUsers);
