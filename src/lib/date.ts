import dayjs from 'dayjs';

export function getDuration(from: Date, to?: Date, format?: string): string {
	return `${dayjs(from).format(format ?? 'YYYY-MM-DD')} ~ ${
		to ? dayjs(to).format(format ?? 'YYYY-MM-DD') : 'Present'
	}`;
}
