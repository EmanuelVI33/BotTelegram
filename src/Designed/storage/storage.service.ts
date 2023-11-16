import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';

@Injectable()
export class StorageService {
  // Define la ruta base donde se almacenan los elementos
  private storageBasePath = path.join(__dirname, 'storage');

  constructor() {
    // Crea la carpeta de almacenamiento si no existe
    if (!fs.existsSync(this.storageBasePath)) {
      fs.mkdirSync(this.storageBasePath);
    }
  }

  async storeFile(type: string, fileName: string, fileData: Buffer) {
    const typeFolderPath = path.join(this.storageBasePath, type);

    console.log('Type ' + typeFolderPath);

    if (!fs.existsSync(typeFolderPath)) {
      fs.mkdirSync(typeFolderPath);
    }

    const filePath = path.join(typeFolderPath, fileName);

    console.log('FilePath ' + filePath);

    fs.writeFileSync(filePath, fileData);

    return filePath;
  }
}
