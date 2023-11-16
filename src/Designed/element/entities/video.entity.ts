import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Element } from './element.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Element)
  element: Element;
}
