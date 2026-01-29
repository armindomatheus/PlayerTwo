import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from './common/dto/pagination-query.dto';
import { buildPagination } from './common/pagination/pagination.util';

@Injectable()
export class AppService {
  private readonly items = Array.from({ length: 42 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  getHealth(): { status: string } {
    return { status: 'ok' };
  }

  listItems(query: PaginationQueryDto) {
    const { page, limit, skip, take } = buildPagination(query);
    const data = this.items.slice(skip, skip + take);

    return {
      data,
      meta: {
        page,
        limit,
        total: this.items.length,
      },
    };
  }
}
