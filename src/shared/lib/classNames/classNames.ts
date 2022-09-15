type Mods = Record<string, boolean|string>;
export function classNames (cls:string, mods:Mods, addditions:string[]): string {
    return [
        cls,
        ...addditions,
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ].join(' ')

}