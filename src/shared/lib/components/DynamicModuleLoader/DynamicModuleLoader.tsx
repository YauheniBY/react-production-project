import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { useDispatch, useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import cls from './DynamicModuleLoader.module.scss';

export type ReducerList = {
    [reducerName in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]
interface DynamicModuleLoaderProps {
    reducers: ReducerList,
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const { t } = useTranslation();

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducerListEntry) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT ${reducerName} Reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([reducerName, reducer]: ReducerListEntry) => {
                        store.reducerManager.remove(reducerName);
                        dispatch({ type: `@DESTROY ${reducerName} Reducer` });
                    });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
