import { dev } from '$app/environment';
import { MONGO_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';

if (!MONGO_URI) {
	throw new Error('MONGO_URI is not defined');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (dev) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (!global._mongoClientPromise) {
		client = new MongoClient(MONGO_URI, {});
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		global._mongoClientPromise = client.connect();
	}
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	clientPromise = global._mongoClientPromise;
} else {
	client = new MongoClient(MONGO_URI, {});
	clientPromise = client.connect();
}

export default clientPromise;
