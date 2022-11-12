import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        // isLoading,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>

                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={50} width={50} border="50%" />
                        <Skeleton className={cls.username} height={16} width={150} />
                        <Skeleton className={cls.date} height={16} width={150} />
                    </div>
                    <Skeleton className={cls.title} height={24} width={250} />
                    <Skeleton className={cls.img} height={200} />
                    <div className={cls.header}>
                        <Skeleton className={cls.title} height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} height={200} width={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton height={16} width={130} />
                </div>
                <Skeleton className={cls.title} height={16} width={150} />
            </Card>
        </div>
    );
});
