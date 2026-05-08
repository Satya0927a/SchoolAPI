import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.ts";
import * as fs from "fs";
import * as path from "path";

const caCert = fs.readFileSync(
  path.resolve(__dirname, "../../cert/isrgrootx1.pem"),
  "utf8",
);

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
  ssl: {
    ca: caCert,
  },
});
const prisma = new PrismaClient({ adapter });

export { prisma };
