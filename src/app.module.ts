import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    // 1. Load the .env file globally
    ConfigModule.forRoot({
      isGlobal: true, 
    }),

    // 2. Connect to MongoDB asynchronously
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),

    UsersModule,
    QuestionModule,
  ],
   controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
