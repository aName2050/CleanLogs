import { getLastItem } from './array';

function getStack(): string {
    let stackInfo = '';

    try {
        // throw error but catch it to prevent crashing
        throw new Error();
    } catch (e: any) {
        const stackLine = e.stack.split('\n')[3].trim();
        const match = /\((.*):(\d+):(\d+)\)/.exec(stackLine);

        if (match) {
            const [filePath] = match;
            stackInfo = `${getLastItem(filePath.split('\\'))?.split(':')[0]}:${
                filePath.split(':')[2]
            }`;
        }
    }

    return stackInfo;
}

export { getStack };
