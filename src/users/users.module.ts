import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import this
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema'; // Import your schema

@Module({
  imports: [
    // This connects the 'User' model to this specific module
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
