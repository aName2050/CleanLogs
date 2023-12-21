// types/logger.d.ts

declare module '@aname2050/cleanlogs' {
    export enum LogType {
        Log = 'LOG',
        Error = 'ERROR',
        Warning = 'WARNING',
        Info = 'INFO',
        HTTP = 'HTTP',
    }

    export class Logger {
        constructor(logType: LogType);
        log(message: string): boolean;
    }

    export interface LogOptions {
        timestamp: boolean;
        stack: boolean;
    }
}
