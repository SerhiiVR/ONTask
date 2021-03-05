import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
  ) { }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    if (Array.isArray(createBookDto)) {
      for (const book of createBookDto) {
        const createdBook = new this.bookModel(book);
        createdBook.save();
      }
      return Book;
    }
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findBooks(limit: number, start: number): Promise<Book[]> {
    return this.bookModel.find().skip(start).limit(limit).exec();
  }

}
