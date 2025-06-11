import { Expose } from 'class-transformer';

export class GetAccessStatusDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}
