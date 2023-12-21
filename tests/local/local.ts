import Logger, {
    LogType,
    generateTimestamp,
    getStack,
} from '../../src/prettylogs';

const log: Logger = new Logger(LogType.Log, {
    stack: true,
    timestamp: true,
});
const error: Logger = new Logger(LogType.Error, {
    stack: true,
    timestamp: true,
});
const warning: Logger = new Logger(LogType.Warning, {
    stack: true,
    timestamp: true,
});
const info: Logger = new Logger(LogType.Info, {
    stack: true,
    timestamp: true,
});
const http: Logger = new Logger(LogType.HTTP, {
    stack: true,
    timestamp: true,
});

log.log('this is a log!');
error.log('this is an error!');
warning.log('this is a warning!');
info.log('this is an info log!');
http.log('this is a http log!');
