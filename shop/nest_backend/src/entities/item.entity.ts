import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'Name', nullable: true}) // Specify the column name here
    Name: string;

    @Column({name: 'Price', nullable: true})
    Price: number

    @Column({nullable: true})
    user_id: number

    @Column({nullable: true})
    url: string

}