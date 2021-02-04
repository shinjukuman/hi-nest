import { Controller, Get, Post, Param, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies.';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  createOne() {
    return 'This will create a movie.';
  }

  @Delete('/:id')
  deleteOne(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patchOne(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
