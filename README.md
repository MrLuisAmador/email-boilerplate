# Email Inliner and Boilerplate Template
This will allow you to develop emails in a semi-normal way and not lose your sanity. There are pre-developed templates or you can start from scratch.

## What you are doing
Usually emails are created using tables and inline css. Unfortunately, the combination of these two things can make your head explode, and no one wants that to happen. 

So the basics here are that you are going to create your email as site in the  **working** folder. That means you'll build the email out in tables, but only attach classes and necessary ids to the tables, table row, or table cell instead of inline css. 
Create a separate stylesheet or multiple stylesheets (if you are using a framework) within a **css** folder inside your **working** directory and link it to your email html file.

Then, when you are done with development, run ``gulp`` in the root folder. That'll create a **dist** folder with your inlined html. Then you can copy and paste from that file into your various email applications.

If you check out your inlined html you'll notice that there are ``<style>`` tags included in the head of the document in additioned to being added inline on their corresponding elements. These are needed for email browsers to interpret media queries.

Images are kept in in a global **img** folder. That'll be easier for testing purposes, since most images get uploaded to separate email hosting, anyways.

## Node Version v8.0.0

In order for this project to run, install [nvm](https://github.com/nvm-sh/nvm) to use the correct Node verson for this project to run correctly.

Once nvm is installed, source the .nvmrc file to switch to the correct Node version

```sh
$ nvm use
```

## Installation

You'll need Gulp installed globally:

```sh
$ npm i -g gulp
```
If you don't want to install gulp globally, you can run npm build scripts

```sh
$ npm run <script-name>
```

Install dependencies

```sh
$ cd boilerplate
$ npm install
```

Use the global Gulp to compile sass for building locally
```sh
$ gulp watch
```
Or run the build script

```sh
$ npm run watch
```

Code your email

Run global Gulp to inline your css
```sh
$ gulp
```
Or run the build script

```sh
$ npm run inline
```

## To Do's


## Helpful Email Development and Testing Links
* https://www.campaignmonitor.com/css/
* https://github.com/mailchimp/Email-Blueprints
* http://zurb.com/playground/responsive-email-templates
* https://github.com/seanpowell/Email-Boilerplate