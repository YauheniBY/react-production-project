import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView, ArticleSortField, ArticleType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: ArticleSortField;
    view: ArticleView;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
