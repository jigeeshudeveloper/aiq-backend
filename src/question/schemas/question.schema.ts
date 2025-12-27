import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document; // Mongoose Document Type
@Schema({ 
  timestamps: true, // Adds createdAt and updatedAt automatically
  collection: 'question_bank' 
})
export class Question extends Document {
  @Prop({ required: true, trim: true })
  question: string;

  @Prop({ 
    type: [String], 
    required: true,
    validate: [arrayLimit, '{PATH} must have at least 2 options'] 
  })
  options: string[];

  @Prop({ 
    required: true, 
    type: Number,
    min: 0 
  })
  correct_index: number;

  @Prop({ type: String, index: true }) // Indexing for faster searches
  category: string;

  @Prop({ 
    type: String, 
    enum: ['easy', 'medium', 'hard'], 
    default: 'medium' 
  })
  difficulty: string;

  @Prop({ type: [String], index: true })
  tags: string[];

  @Prop({ default: true })
  isActive: boolean;
}

// Custom validator for options array length
function arrayLimit(val: string[]) {
  return val.length >= 2;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
