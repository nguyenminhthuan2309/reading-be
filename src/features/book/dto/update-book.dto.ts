import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {}

export class PatchBookDto extends PartialType(CreateBookDto) {}
