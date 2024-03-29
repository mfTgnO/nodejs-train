/*
* Node.js Path
* https://www.javatpoint.com/nodejs-path
*
* The Node.js path module is used to handle and transform files paths. This module can be imported by using the following syntax:
*
* Syntax:
* var path =  require ("path")
*
* Node.js Path Methods

Let's see the list of methods used in path module:
Index 	Method 	Description
1. 	path.normalize(p) 	It is used to normalize a string path, taking care of '..' and '.' parts.
2. 	path.join([path1][, path2][, ...]) 	It is used to join all arguments together and normalize the resulting path.
3. 	path.resolve([from ...], to) 	It is used to resolve an absolute path.
4. 	path.isabsolute(path) 	It determines whether path is an absolute path. an absolute path will always resolve to the same location, regardless of the working directory.
5. 	path.relative(from, to) 	It is used to solve the relative path from "from" to "to".
6. 	path.dirname(p) 	It return the directory name of a path. It is similar to the unix dirname command
7. 	path.basename(p[, ext]) 	It returns the last portion of a path. It is similar to the Unix basename command.
8. 	path.extname(p) 	It returns the extension of the path, from the last '.' to end of string in the last portion of the path. if there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
9. 	path.parse(pathstring) 	It returns an object from a path string.
10. 	path.format(pathobject) 	It returns a path string from an object, the opposite of path.parse above.
* */
var path = require("path");
// Normalization
console.log('normalization : ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));
// Join
console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));
// Resolve
console.log('resolve : ' + path.resolve('path_example.js'));
// Extension
console.log('ext name: ' + path.extname('path_example.js'));