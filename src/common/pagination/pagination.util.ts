import { PaginationQueryDto } from '../dto/pagination-query.dto';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

export function buildPagination(query: PaginationQueryDto) {
  const page = query.page ?? DEFAULT_PAGE;
  const limit = query.limit ?? DEFAULT_LIMIT;
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
    take: limit,
  };
}
