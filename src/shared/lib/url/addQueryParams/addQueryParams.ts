export function getQueryParams(params: OptionalRecord<any, any>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}

/**
 * Функция добавления параметров строки запросов в URL
 * @param params
 */

export function addQueryParams(params: OptionalRecord<any, any>) {
    window.history.pushState(null, '', getQueryParams(params));
}
