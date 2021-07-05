import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { WordBook } from 'src/entities/wordbook.entity';
import { Repository } from 'typeorm';
import { CreateWordBookDto } from './dto/create-word-book.dto';

@Injectable()
export class WordbooksService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(WordBook)
    private wordBooksRepository: Repository<WordBook>,
  ) {}

  async findWordBooks() {
    return this.wordBooksRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOneWordBook(wordBookId: number) {
    return this.wordBooksRepository.findOne({ where: { id: wordBookId } });
  }

  async createWordBook(createWordBookDto: CreateWordBookDto, userId: number) {
    const wordBook = new WordBook();
    console.log(createWordBookDto);
    wordBook.name = createWordBookDto.name;
    wordBook.visibility = createWordBookDto.visibility;
    wordBook.OwnerId = userId;

    return this.wordBooksRepository.save(wordBook);
  }

  async updateWordBook() {
    // this.wordBooksRepository.update();
    throw new Error('Method not implemented.');
  }

  async deleteWordBook() {
    throw new Error('Method not implemented.');
  }
}
