import { Column } from 'typeorm';

export class Element {
  @Column()
  path: string;

  // @Column()
  // changed: boolean;

  @Column()
  index: number;

  @Column()
  type: string; // Añade un campo para definir el tipo
}
