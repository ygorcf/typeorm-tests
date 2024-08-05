import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reuniao {
  @PrimaryGeneratedColumn({ type: "integer" })
  id: number;

  @Column({ type: "varchar" })
  nome = "";

  @Column({ type: "date" })
  data = new Date();
}
