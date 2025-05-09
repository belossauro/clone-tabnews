import { Client } from "pg";

async function query(queryObject) {
  const client = await getNewClient();
  try {
    const result = await client.query(queryObject);
    return result;
  } finally {
    await client.end();
  }
}

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl:
      process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "test",
  });
  await client.connect();
  return client;
}

export default {
  query,
  getNewClient,
};
