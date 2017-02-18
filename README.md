# starter-app-react
Starter kit for building a complete application with a back-end service (nodejs) and front-end UI (react).

1. clone this repo and `cd` to the root directory
2. clear out previous git history - `rm -rf .git`
3. update package name in [package.json]('package.json')
3. `git init`
4. `npm install`
5. `npm run build.ui && npm run build.service`
6. `docker-compose up -d`

## Dependencies
### UI
* react
* material UI

### Server
* express

### Universal
* raven (used with sentry monitoring - **_perhaps I should consider a more general logging/monitoring interface_**)

### Development/Testing
* babel
* webpack
* eslint