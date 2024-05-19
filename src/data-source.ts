import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST || "localhost",
    port: Number(process.env.TYPEORM_PORT) || 3306,
    username: process.env.TYPEORM_USERNAME || "root",
    password: process.env.TYPEORM_PASSWORD || "root",
    database: process.env.TYPEORM_DATABASE || "database",
    entities: ['dist/entities/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
})

AppDataSource.initialize();