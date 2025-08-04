# push-notifications-appwrite

Minimal example for sending a push notification using a self-hosted [Appwrite](https://appwrite.io/) instance.

## Prerequisites
- Docker & Docker Compose
- Node.js 18+

## Start Appwrite
```bash
docker compose up -d
```
Open http://localhost to finish the initial setup.

## Configure messaging
1. Create a project in the Appwrite console.
2. Add a Messaging provider (e.g. FCM or APNs) and configure the credentials.
3. From your mobile app, register the device with the project and copy its **device ID**.
4. Generate an API key with the `Messaging` scope.

## Send a test notification
Set the following environment variables:
```bash
export APPWRITE_ENDPOINT=http://localhost/v1
export APPWRITE_PROJECT_ID=<your_project_id>
export APPWRITE_API_KEY=<your_api_key>
export APPWRITE_DEVICE_ID=<registered_device_id>
```
Install dependencies and send the notification:
```bash
npm install
npm run send
```
The script in [`scripts/send-notification.js`](scripts/send-notification.js) will create a push message titled *"Hello from Appwrite"* for the target device.
