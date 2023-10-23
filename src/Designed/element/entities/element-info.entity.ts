import { Column } from 'typeorm';

export class ElementInfo {
  @Column()
  pathFile: string;

  @Column()
  isChanged: boolean;

  @Column()
  index: number;

  @Column()
  type: string;
}
