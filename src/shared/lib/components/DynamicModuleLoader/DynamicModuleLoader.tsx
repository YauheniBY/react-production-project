import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

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
    const mountedReducers = store.reducerManager.getMountedReducers();
    const dispatch = useDispatch();
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const { t } = useTranslation();

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            const mounted = mountedReducers[reducerName as StateSchemaKey];
            // Добавляем новый редюсер только если его нет
            if (!mounted) {
                store.reducerManager.add(reducerName as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${reducerName} Reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([reducerName, reducer]) => {
                        store.reducerManager.remove(reducerName as StateSchemaKey);
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
