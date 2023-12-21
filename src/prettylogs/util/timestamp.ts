function generateTimestamp(): string {
    const now: Date = new Date();

    let D: number,
        M: number,
        Y: number,
        h: number | string,
        m: number | string,
        s: number | string,
        ms: number | string;

    D = now.getDate();
    M = now.getMonth() + 1;
    Y = now.getFullYear();
    h = (now.getHours() + '').padStart(2, '0');
    m = (now.getMinutes() + '').padStart(2, '0');
    s = (now.getSeconds() + '').padStart(2, '0');
    ms = (now.getMilliseconds() + '').padStart(3, '0');

    const timestamp: string = `${M}-${D}-${Y}T${h}:${m}:${s}.${ms}`;

    return timestamp;
}

export { generateTimestamp };
