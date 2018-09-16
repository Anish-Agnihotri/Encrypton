# Login with MetaMask

This demo is published as part of the corresponding blog article ["One-Click Login with Blockchain: a MetaMask Tutorial"](https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial#utilize-unreal-developers-today).

## Live Demo 🚀

The working app can be seen on Firebase: https://login-with-metamask.firebaseapp.com.

The backend is hosted on Now by Zeit: https://login-with-metamask.now.sh/api/users

![demo](https://uploads.toptal.io/blog/image/125794/toptal-blog-image-1522395423193-b3227ea1f43c6cbb9f78e090bd7bb2ee.gif)

## Getting Started

The app is made out of a `backend` which is a REST API written in Express, and a `frontend` which is a React single-page application. It's really a demo, so I tried to use as few libraries as possible.

The simplest way to get started is to launch the demo using docker compose. Alternatively you could launch docker the containers manually, or run the node services using yarn.

#### Launch the demo using Docker Compose:
```bash
docker-compose up -d
```

This will leave a the bakcend listening on localhost:8000 and the frontend on localhost:3000.

#### Launching the demo using Docker:

Build and launch the backend:

```bash
cd backend
docker build -t login-backend .
docker run -d -p 8000:8000 login-backend
```

Build and launch the frontend:

```bash
cd frontend
docker build -t login-front .
docker run -d -p 3000:3000 login-frontend
```

You can then access the app on localhost:3000.


#### Start the backend using Yarn:
```bash
cd backend
yarn install
yarn dev # Will reload the node app on file changes
```

The backend should be running on localhost:8000.

#### Start the frontend using Yarn:

```bash
cd frontend
yarn install
yarn start # Will refresh the page on file changes
```

* * *

This demo is published as part of the corresponding blog article at https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial#utilize-unreal-developers-today.
Visit https://www.toptal.com/blog and subscribe to our newsletter to read great posts!

If you liked this demo, I appreciate small donations. 0xa395447BF15f7525484C0378c76627D45ADE0B96
