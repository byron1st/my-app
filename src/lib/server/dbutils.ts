import type { WithId } from 'mongodb';

export function serializeId<T>(item: WithId<T>) {
	return { ...item, _id: item._id.toString() };
}
