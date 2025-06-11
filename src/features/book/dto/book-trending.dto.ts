import { IsInt, Min, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetTrendingBooksDto {
  @ApiPropertyOptional({
    example: 1,
    minimum: 1,
    description: 'Page number (default: 1)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    example: 10,
    minimum: 1,
    description: 'Items per page (default: 10)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
