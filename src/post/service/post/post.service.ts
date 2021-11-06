import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from '../../../pagination/pagination';
import { PostDto, PostOption, PostResolverDto } from 'src/post/dto/post.dto';
import { Repository } from 'typeorm';
import { PostEntity } from '../../entity/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>
  ){}
  
  async create(post: PostDto): Promise<PostResolverDto | null> { 
    try {
      const data = await this.postRepository.save(post);
      
      return {
        data : data,
        status: 1, 
        message: 'Create data success'
      }

    } catch (error) {
      return {
        data : null,
        status: 0, 
        message: error.message
      };
    }
  }

  async findAll(option: PostOption): Promise<Pagination<PostEntity>> {
    const {limit, page, query} = option;
    const keyword = query?.trim().toLowerCase() ?? '';
    
    let builder =  this.postRepository
      .createQueryBuilder('post').take(limit)
      .skip((page - 1) * limit);

    if(keyword) {
      builder = builder.where(`post.title ILIKE :keyword OR post.content ILIKE :keyword OR post.userName ILIKE :keyword`, {keyword : `%${keyword}%`})
    }

    
    const [results, total] = await builder.getManyAndCount();

    return new Pagination<PostEntity>({
      results,
      total,
    });
  }

  async edit(id: string, post: PostDto): Promise<PostResolverDto | null> { 
    try {
      await this.postRepository.update(id, post);
      return {
        data : await this.postRepository.findOne(id),
        status: 1, 
        message: 'Update data success'
      }

    } catch (error) {
      return {
        data : null,
        status: 0, 
        message: error.message
      };
    }
  }

  async remove(id: string): Promise<PostResolverDto | null> {
    try {
      await this.postRepository.delete(id);
      return {
        data : null,
        status: 1, 
        message: "Delete post success"
      };
    } catch (error) {
      return {
        data : null,
        status: 0, 
        message: error.message
      };
    }
  }

}