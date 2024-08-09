import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Property{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({default: 0})
    price:number

    @Column()
    description:string
}