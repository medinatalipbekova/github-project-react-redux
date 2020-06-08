# #README
![Image of Github](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlZI7UyhujBou2TfbBJ9ij0YFDbc3GZheN_OgaqpYSuSXzZLXT&usqp=CAU) 
###This project allows you to view all repositories on GITHUB.  It is very convenient and easy to use.  To download you need to read the instructions.
## start

1. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
2. Create first build

  ```shell
  $ yarn run build:prod
  ```
3. Copy .env.example file to .env and make the necessary changes there
  
4. Run project in Dev mode

  ```shell
  $ yarn run dev
  ```

## Command Line Commands

#### Installation

```Shell
yarn install
```
Installs the dependencies.

#### Development

```Shell
yarn run dev
```

Starts the development server running on `http://localhost:3001` using the webpack.development.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

```Shell
yarn run dev:server
```

Starts the development server and makes your application accessible at http://localhost:3000.

```Shell
yarn run clean
```
Removes a directory "dist" from a project

#### Building

```Shell
yarn build:prod
```

Prepares your app for deployment to production environment (using the webpack.production.frontend.config.js) (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.


#### Testing

```Shell
yarn run test
```

Tests your application modern JavaScript Testing Framework - Jest with the unit tests specified in the `**/__tests__/*.spec.js` files
throughout the application.

```Shell
yarn run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

```Shell
yarn run coverage
```
![Image of Github](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF5ftRH3G-BkzwVdoPQusRA6DGZNrLVHcv6osuqgZ5LIn8R3F7&usqp=CAU)
##Need help?
Send me a note at madinatalip4858@gmail.com. I'm the author of the project, so I'll be the mechanic to fix it :)