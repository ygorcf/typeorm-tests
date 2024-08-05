import "reflect-metadata";
import { DataSource } from "typeorm";
import { Reuniao } from "../../application/entity/reuniao.entity";

export const AppDataSource = new DataSource({
  synchronize: true,
  logging: false,
  entities: [Reuniao],
  migrations: [],
  subscribers: [],
  type: "sqlite",
  database: "./database/database.sqlite",
});
