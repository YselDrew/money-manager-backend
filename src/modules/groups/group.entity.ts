import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'groups' })
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
