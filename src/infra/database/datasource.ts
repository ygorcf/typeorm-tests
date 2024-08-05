import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Reuniao } from "../../application/entity/reuniao.entity";

function obterDadosConexaoTeste() {
  return {
    synchronize: true,
    logging: true,
    type: "sqlite",
    database: ":memory:",
  };
}

function obterDadosConexaoPadrao() {
  return {
    synchronize: true,
    logging: false,
    type: "sqlite",
    database: "./database/database.sqlite",
  };
}

function obterDadosConexao(): DataSourceOptions {
  let configuracaoBase;

  if (process.env.NODE_ENV === "test") {
    configuracaoBase = obterDadosConexaoTeste();
  } else {
    configuracaoBase = obterDadosConexaoPadrao();
  }

  return {
    ...configuracaoBase,
    entities: [Reuniao],
    migrations: [],
    subscribers: [],
  };
}

export const AppDataSource = new DataSource(obterDadosConexao());
