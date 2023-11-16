import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Element } from './element.entity';

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Element)
  element: Element;

  @Column()
  name: string;

  @Column()
  author: string;
}
