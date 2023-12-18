import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import { Client } from "pg";

async function loadFakeData(numUsers: number = 10) {
  console.log(`load fake data for ${numUsers} users`);
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT!),
  });
  await client.connect();
  const res = await client.query("SELECT 1");
  console.log(res);
  await client.end();
}

loadFakeData();
