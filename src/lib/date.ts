import dayjs from 'dayjs';

export function getDuration(from: Date, to: Date, format?: string): string {
	const fromStr = dayjs(from).format(format ?? 'YYYY-MM-DD');

	const dayjsTo = dayjs(to);
	const toStr = dayjsTo.isBefore(new Date()) ? dayjsTo.format(format ?? 'YYYY-MM-DD') : 'Present';

	return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
}
