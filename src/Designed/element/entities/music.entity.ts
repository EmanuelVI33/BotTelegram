import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ElementInfo } from './element-info.entity';

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: string;

  // Incrustar campos
  @Column(() => ElementInfo)
  infoElement: ElementInfo;

  @Column()
  name: string;

  @Column()
  author: string;
}
