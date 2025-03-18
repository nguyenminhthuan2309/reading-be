import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from './book.entity';
import { BookCategory } from './book-category.entity';

@Entity('book_category_relation')
export class BookCategoryRelation {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @ManyToOne(() => Book, (book) => book.bookCategoryRelations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => BookCategory, (category) => category.bookCategoryRelations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: BookCategory;
}
