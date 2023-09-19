import { Module } from '@nestjs/common';
import { AudiuApiService } from './audiu-api.service';
import { AudiuApiController } from './audiu-api.controller';

@Module({
  controllers: [AudiuApiController],
  providers: [AudiuApiService],
  exports: [AudiuApiService], // Quiero exportar este servico
})
export class AudiuApiModule {}
