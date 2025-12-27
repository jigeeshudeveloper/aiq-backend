import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument} from './schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>, // <- check this
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const newQuestion = new this.questionModel(createQuestionDto);
    return newQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }
}