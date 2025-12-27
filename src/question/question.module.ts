import { Module } from '@nestjs/common';
import { QuestionsController } from './question.controller';
import { QuestionsService } from './question.service';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionModule {}
