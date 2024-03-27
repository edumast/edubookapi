"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const mensagem_1 = require("./entity/mensagem");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "viaduct.proxy.rlwy.net",
    port: 30088,
    username: "root",
    password: "vzkVqJmvfmtQRCAOOhYKcXivNBWkjoSC",
    database: "railway",
    synchronize: true,
    logging: false,
    entities: [mensagem_1.mensagem],
    migrations: [],
    subscribers: [],
    driver: require('mysql2'),
});
exports.AppDataSource.initialize();
//# sourceMappingURL=data-source.js.map