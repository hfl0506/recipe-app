import logger from 'pino';
import * as dayjs from 'dayjs';

const level = process.env.LOG_LEVEL;

export const log = logger({
  transport: {
    target: 'pino-pretty',
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}`,
});
