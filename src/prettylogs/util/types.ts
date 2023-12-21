enum LogType {
    Log = 'LOG',
    Error = 'ERROR',
    Warning = 'WARN',
    Info = 'INFO',
    HTTP = 'HTTP',
}

interface LogOptions {
    timestamp?: boolean;
    stack?: boolean;
}

export { LogType, LogOptions };
