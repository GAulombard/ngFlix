# NgFlix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## TUTO

### eslint installation

### modern-normalize installation

to be sure all navigators will show your content the same way

`npm install modern-normalize`

and add to the top of styles.scss

`@import '../node_modules/modern-normalize/modern-normalize.css';`

### primeflex installation

for responsivity in easy way

[primeFlex](https://primeflex.org/installation)

### install icon library prime ng

`npm install primeicons`

[primeng icon](https://primeng.org/icons)


### install prime ng

`npm install primeng`


### deploy

npm run build -> fix error budget
folder "dist" to upload

use fileZilla to upload to standard host using ftp

deploy to github pages

- create repository with readmefile and upload the dist folder
- go to settings -> pages -> githubActions -> use static HTML and configure -> commit changes
- fix issue with the domain name -> in the index.html change base href to "/ngflix/"
