import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView)=> void;

}

export const ArticleViewSelector = (props:ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;
    const viewTypes = [
        {
            icon: TiledIcon,
            view: ArticleView.SMALL,
        },
        {
            icon: ListIcon,
            view: ArticleView.BIG,
        },
    ];

    const onClick = ((newView: ArticleView) => () => {
        onViewClick?.(newView);
    });

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}

                    />
                </Button>
            ))}
        </div>
    );
};
