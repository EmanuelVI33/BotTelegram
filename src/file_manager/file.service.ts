import { Injectable } from '@nestjs/common';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { LinkedList } from 'src/TDA';
import { Multimedia } from 'src/multimedia/model';

@Injectable()
export class FileService {
  private readonly filePath: string = 'public/file/multimedia.json';

  constructor() {
    // Crea el archivo si no existe
    if (!existsSync(this.filePath)) {
      writeFileSync(this.filePath, '[]', 'utf-8');
    }
  }

  // Lee la lista multimedia desde el archivo
  readMultimediaList(): Multimedia[] {
    const fileData = readFileSync(this.filePath, 'utf-8');
    return JSON.parse(fileData);
  }

  // Escribe la lista multimedia en el archivo
  writeMultimediaList(list: LinkedList<Multimedia>): void {
    const jsonData = list.toJson();
    writeFileSync(this.filePath, jsonData, 'utf-8');
  }
}
