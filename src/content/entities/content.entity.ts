import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Content extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  duration: number;

  @Prop({})
  urlFile: string;

  @Prop({})
  localePath: string;

  @Prop({ type: Types.ObjectId, ref: 'Program' })
  program: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Presenter' })
  presenter?: Types.ObjectId;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
