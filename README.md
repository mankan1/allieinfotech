# Angular 2 Company Website Template

This repository holds **Company Website Template** for fast implementation of generic company website.
It is written with Angular 2, TypeScript, HTML(5), CSS3, Sass, and later on some database stuff
will be included. Most likely MongoDB. More backend stuff will be added too.

The repository includes source code of decent looking UI with good scalability to mobile browsers. 
The menu changes for mobile browsers or when browser width is scaled down.

This project uses [Angular 2 Quickstart Source Code](https://github.com/angular/quickstart) as basis,
so it may have some bit of left of that project. 
It has also some features, like Routing, from
[Angular 2 Tutorial: Tour Of Heroes](https://angular.io/docs/ts/latest/tutorial/), 
which is the official Angular 2 Tutorial.

## Prerequisites

Node.js and npm are essential to Angular 2 development. 
For more info on installing them and Git cloning this repo, 
**Check out** [Angular 2 Quickstart Source Code](https://github.com/angular/quickstart) repository.

This project uses some additional npm packages, which should be installed as well. 
I haven't yet checked the right way to include the packages with project but that feature is coming later.

List of packages:
```bash
+-- concurrently@2.1.0      //This allows to run multiple tasks simultaneously when starting local server.
+-- gulp@3.9.1              //It is a build tool, this time used with Sass configuration.
+-- lite-server@2.2.0       //Local database server. Included just in case.
+-- node-sass@3.8.0         //Sass is a tool to make Css writing easier and better. Compiles scss->css.
+-- typescript@1.8.10       //TypeScript package installed just in case.
```

All packages and their implementation are preconfigured in project's files, 
so they are necessary to install.

You can install packages  with npm by typing:
```bash
npm install <package>
```

For example:
```bash
npm install concurrently
```

You can also install packages globally by adding **-g** parameter after **install**, like so:
```bash
npm install -g <package>
```

Most recent version of all packages, node.js and npm are used with this project, 
but just in case, these are the versions of node.js and npm:
```bash
node --version: v6.2.1
npm --version: 3.9.3
```

The rest of the system and tools used:
* `Windows 10 64bit`    Operating System
* `Visual Studio Code`  The Editor
* `Google Chrome`       The Browser

## To run this project:

1) Install node.js and npm

2) Install all the packages

3) Clone this Git repository.

4) Go to repository's folder and run 

```bash
npm install
```

5) Run the project
```bash
npm start
```

## Folder structure

This project has self designed structure. 
All these folders have configured to work this way:

```bash
[app]           // JavaScript files compiled by TypeScript compiler. DO NOT EDIT.
[css]           // Css files compiled by sass compiler. DO NOT EDIT.
[html]          // Html files for Angular 2 components. You may edit.
[images]        // Images. You may edit.
[sass]          // Sass folder for .scss style files. You may edit.
[ts]            // TypeScript files. The main Angular2 backbone. You may edit.
gulpfile.js     // Gulp configuration for runtime Sass->Css compiling. DO NOT EDIT.
```

This is just a guideline, so you know how to work with this project. All the configurations
are set to **package.json**, **tsconfig.json** and **systemjs.config.js** files.

##How to setup Visual Studio Code Debugging

This project can be debugged with Visual Studio Code editor and Google Chrome browser. It has preconfigured settings for Vs Code debugger
in .vscode/launch.json file.

Link to [VS Code Chrome Debug extension](https://github.com/Microsoft/vscode-chrome-debug) in GitHub.

First you need to install Chrome Debugging extension to VS Code using this [tutorial](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code).

After that, you will have to change all the Chrome Shorcuts at your computer to set Chrome with remote debugging enabled.
To do this, follow these instructions:

**Windows**

* Right click the Chrome shortcut, and select properties
* In the "target" field, append --remote-debugging-port=9222
* Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222

**OS X**

* In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

**Linux**

* In a terminal, launch google-chrome --remote-debugging-port=9222

**Note** that in Windows, if you have Chrome shortcut in Windows Taskbar, unpin that. 
After that find the original Google Chrome shortcut and make changes listed above. 
Then pin the shortcut back to Taskbar if you wish. I am not sure if this is required step, but I did it. 

Another thing in Windows: I had Chrome running in background even if I shut it down. 
Next to the clock in hidden Tray icons I had a Chrome logo saying something like "Run Chrome in background".
I disabled that, and after that the debugging started to work.

To debug, just run npm start from command prompt like always, and in VS Code's Debug tab, 
select if you want to 'Launch new localhost' or 'Attach with sourcemaps', and then press 'Start Debugging (F5)' button. 

You can put breakpoints to lines for example in .ts files by clicking from the left of the line number. You can also add variables to watch 
and use console.log() in your code.

## More info

Please be free to ask. I can be contacted via email.