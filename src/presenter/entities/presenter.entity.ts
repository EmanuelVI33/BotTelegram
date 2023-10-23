import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Presenter extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({})
  localePath: string;

  @Prop()
  voice?: string;
}

export const PresenterSchema = SchemaFactory.createForClass(Presenter);
