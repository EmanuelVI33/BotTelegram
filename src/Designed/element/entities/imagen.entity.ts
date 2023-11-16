import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Element } from './element.entity';

@Entity()
export class Imagen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Element)
  element: Element;

  @Column()
  duration: number;
}
