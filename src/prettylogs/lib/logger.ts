import { generateTimestamp } from '../util/timestamp';
import { getStack } from '../util/stack';
import { LogType, LogOptions } from '../util/types';
import chalk from 'chalk';

class Logger {
    private logType: LogType;
    private options: LogOptions;

    private colors: object = {
        log: '#222324',
        error: '#960000',
        warning: '#c4a61f',
        info: '#035efc',
        http: '#0000ff',
    };

    constructor(level: LogType, logOptions?: LogOptions) {
        this.logType = level;

        this.options = {
            timestamp: true,
            stack: true,
            ...logOptions,
        };
    }

    public log(...message: string[]): void {
        let log: string = `${generateTimestamp()} ${getStack()} ${
            this.logType
        } ${message.join('')}`;

        console.log(log);
    }
}

export { Logger };
