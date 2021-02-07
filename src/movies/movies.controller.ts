import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/Movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  createOne(@Body() movieData) {
    return this.moviesService.createOne(movieData);
  }

  @Delete(':id')
  deleteOne(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patchOne(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.updateOne(movieId, updateData);
  }
}
