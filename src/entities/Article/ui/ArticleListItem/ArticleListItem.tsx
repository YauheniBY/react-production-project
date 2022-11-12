import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import IconEye from 'shared/assets/icons/eye-20-20.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;
    // isLoading: boolean;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
        // isLoading,
    } = props;
    const types = <Text className={cls.types} text={article?.type.join(',')} />;

    const views = (
        <>
            <Text className={cls.views} text={String(article?.views)} />
            <Icon className={cls.icon} Svg={IconEye} />
        </>
    );
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articles_details + String(article?.id));
    }, [article?.id, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            (block) => (block.type === ArticleBlockType.TEXT),
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>

                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar className={cls.card} size={50} src={article?.user.avatar} />
                        <Text className={cls.username} text={article?.user.username} />
                        <Text className={cls.date} text={article?.createdAt} />
                    </div>
                    <Text className={cls.title} title={String(article?.title)} />
                    {types}
                    <img className={cls.img} src={article?.img} alt={article?.title} />
                    {textBlock
                        && (
                            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                        )}
                    <div className={cls.footer}>
                        <Button
                            onClick={onOpenArticle}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article?.img} alt={article?.title} />
                    <Text className={cls.date} text={article?.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={String(article?.title)} />
            </Card>
        </div>
    );
});
