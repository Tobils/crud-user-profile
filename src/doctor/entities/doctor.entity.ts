import { Profile } from "src/base-entities/profile.entity";
import { Column, Entity } from "typeorm";

@Entity('doctor')
export class Doctor extends Profile {
    @Column()
    specialist: string
}
