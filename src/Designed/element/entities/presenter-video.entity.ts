import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Element } from './element.entity';

@Entity()
export class PresenterVideo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Element)
  element: Element;

  @Column()
  title: string;

  @Column()
  content: string;
}
