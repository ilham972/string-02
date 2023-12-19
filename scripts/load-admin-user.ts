import { getClient } from "@/db";
import bcrypt from "bcrypt";

async function loadAdminUser(userName: string, password: string) {
  console.log(`Loading admin user ${userName} with password ${password}`);
  if (!userName || !password) {
    console.error("Username and password are required");
    return;
  }
  const saltRounds = 10;

  const client = await getClient();
  try {
    await client.query("begin");
    await client.query(
      "INSERT INTO users (username, password, is_admin) VALUES ($1, $2, $3)",
      [userName, await bcrypt.hash(password, saltRounds), true]
    );
    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    console.error(error);
    await client.end();
  }
  await client.end();
  console.log(`Admin user ${userName} loaded successfully`);
}

loadAdminUser(process.argv[2], process.argv[3]);
