import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ElementInfo } from './element-info.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: string;

  // Incrustar campos
  @Column(() => ElementInfo)
  infoElement: ElementInfo;
}
