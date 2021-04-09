import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export abstract class Profile{
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column()
    name: string

    @Column()
    image: string

    @Column()
    location: string

    @Column()
    address_notes: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    delleted_at: Date
}