import "reflect-metadata"
import { DataSource} from "typeorm"
 
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "twatch",
    synchronize: false,
    entities: ["src/**/*.entity{.ts,.js}"],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})