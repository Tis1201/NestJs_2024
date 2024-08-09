import { Property } from "src/entities/property.entities";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig:PostgresConnectionOptions = {
    //Don't put this here, Instead put in the env file
    url:"postgresql://FirstEntities_owner:24zgnINDOabQ@ep-hidden-dust-a14tadwv.ap-southeast-1.aws.neon.tech/FirstEntities?sslmode=require",
    type:"postgres",
    port:3306,
    entities:[__dirname+'/**/*.entities{.ts,.js}'],
    synchronize:true
}