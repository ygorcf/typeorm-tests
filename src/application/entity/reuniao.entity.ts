import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reuniao {
  @PrimaryGeneratedColumn({ type: "integer" })
  id = -1;

  @Column({ type: "varchar" })
  nome = "";

  @Column({ type: "date" })
  data = new Date();
}
