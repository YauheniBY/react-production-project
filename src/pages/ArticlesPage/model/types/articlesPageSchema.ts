import {
    Article, ArticleView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types/acticlesPgeSchema';

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
