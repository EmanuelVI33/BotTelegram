import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  duration: number;
}
