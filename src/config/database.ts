import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "9891",
});

export default client;
