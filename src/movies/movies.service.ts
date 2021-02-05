import { Injectable } from '@nestjs/common';
import { Movie } from './entities/Movie';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    // return this.movies.find((movies) => movies.id === parseInt(id));
    return this.movies.find((movie) => movie.id === +id); // string -> number
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  createOne(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
