import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { PaginationQueryDto } from './common/dto/pagination-query.dto';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOkResponse({ description: 'Serviço ativo.' })
  getHealth(): { status: string } {
    return this.appService.getHealth();
  }

  @Get('items')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  listItems(@Query() query: PaginationQueryDto) {
    return this.appService.listItems(query);
  }
}
