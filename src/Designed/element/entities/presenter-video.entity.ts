import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ElementInfo } from './element-info.entity';

@Entity()
export class PresenterVideo {
  @PrimaryGeneratedColumn()
  id: string;

  // Incrustar campos
  @Column(() => ElementInfo)
  infoElement: ElementInfo;

  @Column()
  title: string;

  @Column()
  content: string;
}
