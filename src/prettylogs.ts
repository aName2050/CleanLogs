import { generateTimestamp } from './prettylogs/util/timestamp';
import { getStack } from './prettylogs/util/stack';
import { Logger } from './prettylogs/lib/logger';
import { LogOptions, LogType } from './prettylogs/util/types';

export default Logger;
export { generateTimestamp, getStack, LogOptions, LogType, Logger };
