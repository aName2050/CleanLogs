import { generateTimestamp } from '../util/timestamp';
import { getStack } from '../util/stack';
import { LogType, LogOptions } from '../util/types';
import chalk from 'chalk';

class Logger {
    private logType: LogType;
    private options: LogOptions;

    private colors = {
        LOG: '#222324',
        ERROR: '#960000',
        WARNING: '#c4a61f',
        INFO: '#035efc',
        HTTP: '#0000ff',
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
        let log: string[] = [];

        if (this.options.timestamp) {
            log.push(`[${generateTimestamp()}]`);
        }
        if (this.options.stack) {
            log.push(`[${getStack()}]`);
        }

        const base: string = log.join(' ');

        // console.log()

        const logLevel: string = chalk
            .bgHex(this.colors[this.logType])
            .bold(`${this.logType}`);

        const formatted: string = `${base} ${logLevel} ${message.join('')}`;

        console.log(formatted);
    }
}

export { Logger };
