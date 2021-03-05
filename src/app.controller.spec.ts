import { Test, TestingModule } from '@nestjs/testing';
//import { BooksController } from './books/books.controller';
//import { BooksService } from './books/books.service';
import { Book, BookDocument } from './books/schemas/book.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(() => {
    booksService = new BooksService(Model);
    booksController = new BooksController(booksService);
  });

  describe('findBooks', () => {
    it('should return Books', async () => {
  
    });
  });
});
