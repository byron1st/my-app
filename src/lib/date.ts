import dayjs from 'dayjs';

export function getDuration(from: Date, to?: Date, format?: string): string {
	const fromStr = dayjs(from).format(format ?? 'YYYY-MM-DD');
	const toStr = to ? dayjs(to).format(format ?? 'YYYY-MM-DD') : 'Present';

	return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
}
