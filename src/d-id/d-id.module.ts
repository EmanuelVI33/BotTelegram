import { Module } from '@nestjs/common';
import { DIdController } from './d-id.controller';
import { DIdService } from './d-id.service';

@Module({
  controllers: [DIdController],
  providers: [DIdService],
})
export class DIdModule {}
