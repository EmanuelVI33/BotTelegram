// program.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Program extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: 'ObjectId', ref: 'Content' }] })
  contents: string[];

  // @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Content' }) // Referencia al contenido
  // contents: string[];
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
