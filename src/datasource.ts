import "reflect-metadata"
import { DataSource} from "typeorm"
import { User } from "./user/user.entity"
 
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "twatch",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})