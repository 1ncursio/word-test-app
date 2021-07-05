import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exams } from './exam.entity';
import { WordBooks } from './wordbook.entity';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'word_test_app', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: '1ncursio@gmail.com', description: '이메일' })
  @Column('varchar', {
    name: 'email',
    unique: true,
    length: 30,
    nullable: false,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1ncursio', description: '닉네임' })
  @Column('varchar', {
    name: 'nickname',
    length: 30,
    nullable: false,
  })
  nickname: string;

  @MinLength(8)
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'nodejsbook', description: '비밀번호' })
  @Column('varchar', {
    name: 'password',
    length: 100,
    select: false,
    nullable: false,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'default', description: '권한' })
  @Column('varchar', { name: 'role', nullable: false, default: 'default' })
  role: string;

  @IsString()
  @MaxLength(255)
  @ApiProperty({ example: 'image.jpg', description: '유저 이미지' })
  @Column('varchar', {
    name: 'image',
    length: 255,
    nullable: true,
  })
  image: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true, description: '계정 사용가능 여부' })
  @Column('boolean', {
    name: 'enabled',
    nullable: false,
    default: true /* 이메일 인증 전까지 비활성화 해야됨 */,
  })
  enabled: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => WordBooks, (wordBooks) => wordBooks.Owner)
  WordBooks: WordBooks[];

  @OneToMany(() => Exams, (exams) => exams.Examinee)
  Exams: Exams[];

  // @OneToMany(() => EmailVerifications)
}