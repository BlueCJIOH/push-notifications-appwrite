import { Client, Messaging, ID } from 'node-appwrite';

const endpoint = process.env.APPWRITE_ENDPOINT || 'http://localhost/v1';
const project = process.env.APPWRITE_PROJECT_ID;
const key = process.env.APPWRITE_API_KEY;
const deviceId = process.env.APPWRITE_DEVICE_ID;

if (!project || !key || !deviceId) {
  console.error('Missing one of APPWRITE_PROJECT_ID, APPWRITE_API_KEY, or APPWRITE_DEVICE_ID env variables.');
  process.exit(1);
}

if (process.env.DRY_RUN) {
  console.log('DRY RUN: would send push notification.');
  process.exit(0);
}

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(project)
  .setKey(key);

const messaging = new Messaging(client);

async function main() {
  const res = await messaging.createPush(ID.unique(), 'Hello from Appwrite', 'Test push from Node', [], [], [deviceId]);
  console.log('Sent message', res);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
