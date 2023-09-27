import { Injectable } from '@nestjs/common';
import { LinkedList } from 'src/TDA';
import { Multimedia } from './model';
import { FileService } from 'src/file_manager/file.service';

@Injectable()
export class MultimediaService {
  private multimediaList: LinkedList<Multimedia>;

  constructor(private readonly fileService: FileService) {
    this.multimediaList = new LinkedList<Multimedia>();

    this.loadMultimediaListFromFile();
    this.addMultimedia(new Video());
  }

  private saveMultimediaListToFile() {
    this.fileService.writeMultimediaList(this.multimediaList);
  }

  // Carga la lista multimedia desde el archivo
  private loadMultimediaListFromFile() {
    const savedList = this.fileService.readMultimediaList();
    savedList.forEach((item) => this.multimediaList.addToEnd(item));
  }

  // Agregar multimedia a la lista
  addMultimedia(multimedia: Multimedia) {
    this.multimediaList.addToEnd(multimedia);
    this.saveMultimediaListToFile();
  }

  // Eliminar multimedia de la lista por su ID
  removeMultimediaById(id: string) {
    const removed = this.multimediaList.findAndRemove(
      (node) => node.data.id === id,
    );

    if (removed) {
      this.saveMultimediaListToFile();
      return removed.data;
    }

    return null;
  }

  // Actualizar multimedia en la lista por su ID
  updateMultimediaById(id: string, updatedMultimedia: Multimedia) {
    const updated = this.multimediaList.findAndUpdate(
      (node) => node.data.id === id,
      updatedMultimedia,
    );

    if (updated) {
      this.saveMultimediaListToFile();
      return updated.data;
    }

    return null;
  }

  // Obtener la cantidad de elementos multimedia en la lista
  getMultimediaCount() {
    return this.multimediaList.getSize();
  }

  getData(): string {
    return this.multimediaList.toJson();
  }
}
