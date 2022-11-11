import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AddCommentForm } from 'features/addCommentForm';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from '../../model/servises/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/ArticleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/servises/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
    className?: string;

}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{id:string}>();
    const dispatch = useDispatch();
    const reducers: ReducerList = {
        articleDetailsComments: articleDetailsCommentsReducer,
    };
    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
                ;
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментариии')} />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
