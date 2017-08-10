# grunt-maester
Grunt config for general purpose.  
Ok, so In version 2.0.0 I fixed up a few things. I focued mostly on testing, and how it can be as painless as possible.  
You can specify the root folder of the source files, and the folder of the tests.

## Current grunt commands
`grunt browserify`  
Runs browserify on the `src/` and `test/` folders.   
It uses two plugins:  
- `brfs`, so you can use `fs` in the browser
- `babelify`, so you can use *es2015* features (it loads the es2015 preset).

`grunt clean`  
Deletes the given folders. Most common target is `:all`  

`grunt eslint`  
Lints the `.js` files in the `src/` folder.  
You can use the `:devBuild` target to allow debugger and console rules.  
Also has a `:fix` target, that fixes all the issues which can be fixed.  

`grunt karma`  
For running unit tests. Karma uses jasmine, and it looks for test files in the `test/` folder with the `.test.js` sufix.  
You can use the `:tdd` target, to run karma in watch mode. You should fire up the `grunt watch` command too in a separate terminal.  

`grunt less`  
Simply transpiles less to css. It looks for `src/style.less`.

`grunt uglify`  
Uglifies the browserified file in the `dist/` folder.

`grunt watch`  
Starts a watch, when any test, less or src files changes, fires up the `eslint`, `browserify` and `less` tasks with the dev target if possible. If the `karma:tdd` runs, it will detect the changes in the transpiled files, and it will run all the tests again.

