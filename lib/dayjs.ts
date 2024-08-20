import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(relativeTime);

export { dayjs };
export default dayjs;
