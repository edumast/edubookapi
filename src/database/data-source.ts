import "reflect-metadata"
import { DataSource } from "typeorm"
import { mensagem } from "./entity/mensagem"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "viaduct.proxy.rlwy.net",
    port: 30088,
    username: "root",
    password: "vzkVqJmvfmtQRCAOOhYKcXivNBWkjoSC",
    database: "railway",
    synchronize: true,
    logging: false,
    entities: [mensagem],
    migrations: [],
    subscribers: [],
    driver: require('mysql2'),
})

AppDataSource.initialize()