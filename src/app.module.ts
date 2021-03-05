import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [DbModule, BooksModule],
})
export class AppModule { }
