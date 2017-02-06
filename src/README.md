# JavaScript for Web Applications


## Introduction
This is a sample application converted to industry standards with build tools.

## Setup Environment

-----------------------------
### <i class="icon-hdd"></i> Software needed
	+ NodeJS

### <i class="icon-upload"></i> How to Run ?
Install Bower.io if you are not installed in your machine

```
npm install -g bower
```

Open Command Prompt and go to the local repo and execute below commands.

```
cd src/weather-app/build-files/
npm install
grunt

cd src/weather-app/server/
npm install
node app.js
```

Open your favourite web browser and go to http://localhost:3000/


## Run Unit Tests

Install karma-cli if you are not installed in your machine

```
npm install -g karma-cli
```

Open Command Prompt and go to the local repo and execute below commands.

```
cd src/weather-app/tests
npm install
karma start my.conf.js
```