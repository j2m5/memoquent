export type TAppData = {
    db: Map<string, unknown>
    entities: string[]
}

export const AppData: TAppData = {
    db: new Map(),
    entities: []
}

export function getData<TData>(table: string): TData[] {
    return AppData.db.get(table) as TData[]
}