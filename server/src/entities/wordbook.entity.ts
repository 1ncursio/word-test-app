import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Word } from './word.entity';
import { WordbookSpace } from './wordbook-space.entity';

@Entity('wordbooks', { schema: 'word_test_app' })
export class Wordbook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '내 단어장 1', description: '단어장 이름' })
  @IsNotEmpty()
  @IsString()
  @Column('varchar', { name: 'name', nullable: false })
  name: string;

  @ApiProperty({ example: 0, description: '공개 여부' })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Column('int', {
    name: 'visibility',
    nullable: false,
    default: 0 /* 0 비공개 1 일부 공개 2 공개 */,
  })
  visibility: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;

  @Column('uuid', { name: 'owner_id' })
  OwnerId: string;

  @ManyToOne(() => User, (users) => users.Wordbooks)
  @JoinColumn([{ name: 'owner_id', referencedColumnName: 'id' }])
  Owner: User;

  @OneToMany(() => Word, (words) => words.Wordbook)
  Words: Word[];

  @Column('uuid', { name: 'wordbook_space_id' })
  WordbookSpaceId: string;

  @ManyToOne(() => WordbookSpace, (wordbookSpace) => wordbookSpace.Wordbooks)
  @JoinColumn({ name: 'wordbook_space_id', referencedColumnName: 'id' })
  WordbookSpace: WordbookSpace;
}
