declare var require: {
    <T>(path: string): T
    (paths: string[], callback: (...modules: any[]) => void): void
    ensure: (
        paths: string[],
        callback: (require: <T>(path: string) => T) => void,
        chunkName?: string
    ) => void
}

declare var process: {
    env: {
        NODE_ENV: string
        BASE_URL: EnvConfig
    }
}

declare interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any
}
