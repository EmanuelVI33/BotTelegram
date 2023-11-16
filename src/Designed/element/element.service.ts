import { Injectable } from '@nestjs/common';
// import { CreateElementDto } from './dto/create-element.dto';
// import { UpdateElementDto } from './dto/update-element.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Imagen } from './entities/imagen.entity';
import { Repository } from 'typeorm';
import { Video } from './entities/video.entity';
import { Music } from './entities/music.entity';
import { PresenterVideo } from './entities/presenter-video.entity';
import { StorageService } from '../storage/storage.service';
// import * as path from 'path';
import { MediaFileManager } from 'src/utils/MediaFileManager';

@Injectable()
export class ElementService {
  constructor(
    @InjectRepository(Imagen)
    private readonly imagenRepository: Repository<Imagen>,
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
    @InjectRepository(Music)
    private readonly musicRepository: Repository<Music>,
    @InjectRepository(PresenterVideo)
    private readonly presentervideoRepository: Repository<PresenterVideo>,
    private readonly storageService: StorageService,
    private readonly mediaFileManager: MediaFileManager,
  ) {}

  async createOrUpdateElements(element: any) {
    const results = [];

    // for (const element of elements) {
    const { isChanged } = element;
    const { type } = element.element;
    console.log(type);

    // Si ya esta creado y fue modificado
    // if (element.id && isChanged) {
    //   // Elemento existente, actualízalo
    //   let entity;
    //   switch (type) {
    //     case 'Video':
    //       entity = await this.videoRepository.findOne(element.id);
    //       break;
    //     case 'Music':
    //       entity = await this.musicRepository.findOne(element.id);
    //       break;
    //     case 'Imagen':
    //       entity = await this.imagenRepository.findOne(element.id);
    //       break;
    //     case 'PresenterVideo':
    //       entity = await this.presentervideoRepository.findOne(element.id);
    //       break;
    //   }

    //   if (entity) {
    //     const updatedEntity = { ...entity, ...element };
    //     results.push(
    //       await this[`${type.toLowerCase()}Repository`].save(updatedEntity),
    //     );
    //   }
    // } else if (!element.id) {
    // Si no existe el id se debe crear
    const entity = this[`${type.toLowerCase()}Repository`].create(element);

    // Obtener archivo
    const { fileBuffer } = element;

    // Almacena el archivo en el servicio de almacenamiento y obtén la ruta
    const filePath = await this.storageService.storeFile(
      type,
      entity.path,
      fileBuffer,
    );

    // Actualiza la entidad con la ruta del archivo almacenado
    entity.path = filePath;

    results.push(await this[`${type.toLowerCase()}Repository`].save(entity));
    // }
    // }

    return results;
  }

  async createOrUpdateElement(fileBuffer: any, data: any, element: any) {
    console.log('Elemento ' + element);
    const type = element.type;

    console.log(type);

    // let entity;

    // if (false) {
    //   switch (type) {
    //     case 'Video':
    //       entity = await this.videoRepository.findOne(id);
    //       break;
    //     case 'Music':
    //       entity = await this.musicRepository.findOne(id);
    //       break;
    //     case 'Imagen':
    //       entity = await this.imagenRepository.findOne(id);
    //       break;
    //     case 'PresenterVideo':
    //       entity = await this.presentervideoRepository.findOne(id);
    //       break;
    //   }

    //   if (entity) {
    //     const updatedEntity = { ...entity, ...element };
    //     await this[`${type.toLowerCase()}Repository`].save(updatedEntity);
    //   }
    // } else {
    const entity = this[`${type.toLowerCase()}Repository`].create({
      element,
      ...data,
    });

    console.log(entity);

    // Type y archivo
    const filePath = await this.mediaFileManager.downloadAndStoreMedia(
      type,
      fileBuffer,
    );

    if (filePath) {
      entity.element.path = filePath;
      await this[`${type.toLowerCase()}Repository`].save(entity);
    }
    // }

    return entity;
  }

  findAll() {
    return `This action returns all element`;
  }
}

// async createOrUpdateElement(element: any) {
//   // return element;

//   const { element: elementInfo } = element;
//   const { isChanged } = element;
//   const { type } = elementInfo;

//   console.log(type);

//   let entity;

//   // Si ya esta creado y fue modificado
//   if (element.id && isChanged) {
//     // Elemento existente, actualízalo
//     switch (type) {
//       case 'Video':
//         entity = await this.videoRepository.findOne(element.id);
//         break;
//       case 'Music':
//         entity = await this.musicRepository.findOne(element.id);
//         break;
//       case 'Imagen':
//         entity = await this.imagenRepository.findOne(element.id);
//         break;
//       case 'PresenterVideo':
//         entity = await this.presentervideoRepository.findOne(element.id);
//         break;
//     }

//     if (entity) {
//       const updatedEntity = { ...entity, ...element };
//       await this[`${type.toLowerCase()}Repository`].save(updatedEntity);
//     }
//   } else if (!element.id) {
//     // Si no existe el id se debe crear
//     const entity = this[`${type.toLowerCase()}Repository`].create(element);

//     console.log('Entidad ' + entity);

//     // Obtener archivo
//     const { fileBuffer } = element;

//     console.log('FileBuffer ' + fileBuffer);

//     // Almacena el archivo y obtén la ruta
//     const filePath = await this.mediaFileManager.downloadAndStoreMedia(
//       type,
//       fileBuffer,
//     );

//     // Verifica si la descarga y almacenamiento fueron exitosos
//     if (filePath) {
//       // Actualiza la entidad con la ruta del archivo almacenado
//       entity.path = filePath;

//       await this[`${type.toLowerCase()}Repository`].save(entity);
//     }
//   }

//   return entity;
// }
