import { Controller, Get, Post, Put, Param, Delete, Query } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Pagination } from 'src/pagination';
import { PostDto, PostOption, PostResolverDto } from 'src/post/dto/post.dto';
import { PostEntity } from 'src/post/entity/post.entity';
import { PostService } from 'src/post/service/post/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService){}

  @Post()
  async create(@Body() post: PostDto): Promise<PostResolverDto> {
    return await this.postService.create(post);
  }

  @Put(':id')
  async edit(@Param('id') id: string, @Body() post: PostDto): Promise<PostResolverDto> {
    return await this.postService.edit(id, post);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<PostResolverDto> {
    return await this.postService.remove(id);
  }

  @Get()
  async findAll(@Query() option: PostOption): Promise<Pagination<PostEntity>> {
    return this.postService.findAll(option);
  }
}
