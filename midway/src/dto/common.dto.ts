import { ApiResponseProperty } from '@midwayjs/swagger';

export class CommonDTO {
  @ApiResponseProperty({ example: '200' })
  code: number;

  @ApiResponseProperty({ example: 'success' })
  result: string;

  @ApiResponseProperty({ example: 'xxxxxxx' })
  message: string;

  @ApiResponseProperty({ example: 'xxxxxxx' })
  data: any;
}
