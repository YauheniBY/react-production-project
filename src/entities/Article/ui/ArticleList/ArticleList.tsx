import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import {
    ArticleListItemSkeleton,
} from '../ArticleListItem/ArticleListItemSceleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.BIG,
    } = props;
    const { t } = useTranslation();
    const getSkeletons = (view:ArticleView) => (
        new Array((view === ArticleView.BIG) ? 3 : 9)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
            ))
    );
    const renderArticle = (article:Article) => (
        <ArticleListItem
            view={view}
            article={article}
            className={cls.card}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
