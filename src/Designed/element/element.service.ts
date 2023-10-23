import { Injectable } from '@nestjs/common';
// import { CreateElementDto } from './dto/create-element.dto';
// import { UpdateElementDto } from './dto/update-element.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';
import { Imagen } from './entities/imagen.entity';
import { PresenterVideo } from './entities/presenter-video.entity';
import { Repository } from 'typeorm';
import { Element } from './entities/element-info.entity';
import { Video } from './entities/video.entity';

@Injectable()
export class ElementService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
    @InjectRepository(Music)
    private readonly musicRepository: Repository<Music>,
    @InjectRepository(Imagen)
    private readonly imagenRepository: Repository<Imagen>,
    @InjectRepository(PresenterVideo)
    private readonly presenterVideoRepository: Repository<PresenterVideo>,
  ) {}

  async createOrUpdateElements(elements: any[]) {
    const results = [];
    for (const element of elements) {
      if (element.id) {
        // Elemento existente, actualízalo
        let entity;
        switch (element.type) {
          case 'Video':
            entity = await this.videoRepository.findOne(element.id);
            break;
          case 'Music':
            entity = await this.musicRepository.findOne(element.id);
            break;
          case 'Imagen':
            entity = await this.imagenRepository.findOne(element.id);
            break;
          case 'PresenterVideo':
            entity = await this.presenterVideoRepository.findOne(element.id);
            break;
        }
        if (entity) {
          // Actualiza los campos específicos de la entidad, por ejemplo, Video, Music, etc.
          // Actualiza infoElement si es necesario
          // Guarda la entidad actualizada
          const updatedEntity = { ...entity, ...element };
          results.push(
            await this[`${element.type.toLowerCase()}Repository`].save(
              updatedEntity,
            ),
          );
        }
      } else {
        // Elemento nuevo, crea uno
        const entity =
          this[`${element.type.toLowerCase()}Repository`].create(element);
        results.push(
          await this[`${element.type.toLowerCase()}Repository`].save(entity),
        );
      }
    }
    return results;
  }

  // create(createElementDto: CreateElementDto) {
  //   return 'This action adds a new element';
  // }

  // creates(createElementDto: any[]) {
  //   return 'This action adds a new element';
  // }

  // findAll() {
  //   return `This action returns all element`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} element`;
  // }

  // update(id: number, updateElementDto: UpdateElementDto) {
  //   return `This action updates a #${id} element`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} element`;
  // }
}
