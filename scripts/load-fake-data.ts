import { faker } from "@faker-js/faker";
import { Client } from "pg";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());
// create client , with key value pair method insid the loadFakeData() function
async function loadFakeData(numUsers: number) {
  console.log(`loading ${numUsers} users..`);
  const client = new Client({
    connectionString: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  try {
    await client.connect();
    console.log("Connected successfully");
    await client.query("begin");
    // WRITE FOR LOOP WITH PARAMETERIZED QUERY , USERNAME, PASSWORD, AVATAR
    for (let i = 0; i < numUsers; i++) {
      const username = faker.internet.userName();
      const password = "password";
      const avatar = faker.image.avatar();
      await client.query(
        "INSERT INTO users (username, password, avatar) VALUES ($1, $2, $3)",
        [username, password, avatar]
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
