import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Content extends Document {
  @Prop()
  type: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  duration: number;

  @Prop()
  fileUrl: string;

  @Prop({ type: [{ type: 'ObjectId', ref: 'Program' }] })
  program: string;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
