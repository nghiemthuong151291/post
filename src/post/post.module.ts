import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './controller/post/post.controller';
import { PostEntity } from './entity/post.entity';
import { PostService } from './service/post/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
