
## TO DO 

### one time

* fork and clone the repo
* setup environment (npm and jest)

### weekly

1. fetch and pull the changes in remote to your local
2. check the latest algo that is added to the repo every Sunday
3. write unit tests with jest (preferably in a separate file)
4. write your function(s) to solve the algo
5. test your code
  * if you pass all the tests, try to make your code more efficient and cleaner
  * if not, debug and turn back to step 3 or 5 until all tests work
  * if stuck, reach out for help
6. push your solution and make a pull request
7. check other accepted solutions
8. discuss the solutions on slack (if necessary)
9. feel welcome to contact the team for questions and feedback ;)

## HOW TO

### fork and clone the repo
1. click 'fork' on the upper left of the github page
2. go to the forked repo in your repositories
3. click 'clone or download' button
4. copy the link
5. go to your terminal and write this command: `git clone <link>` 
6. add the original repo as upstream: `git remote add upstream https://github.com/etkitech/etki_JS.git`
7. go to the directory you will be working in:  `cd etki_JS/algos`

### use jest 
1. make sure that you are in the correct directory. If not go to algos directory. 
2. install Jest: `npm install -g jest` (if windows: `sudo npm install -g jest`)
3. run a test: `jest levelFolderName/weekFolderName/yourTestfileName.js`
4. run all test files `jest`
5. stop test running: Ctrl + c

### update your local repo
1. make sure you are on the correct branch. If not, type: `git checkout master`
## checking and integrating the changes in a controlled manner
2. fetch changes in the original etki repo: `git fetch upstream`
3. go to your master branch: `git checkout master`
4. merge changes in the upstream branch (etki repo) to your local master branch: `git merge upstream/master`
## OR directly getting all the updates in the etki remote
2. pull all changes and make your local same as etki remote: `git pull upstream master`

### Write your code 
1. Go to the relevant week folder: (Ex: Let's say you are in algos folder, you are level1 student and you want to solve algo of week 2, then type: `cd level1/week2`)
2. Create a new js file: for Mac/Linux: `touch fileName.js`, for Windows: `echo fileName.js`
3. Create a new test js file: for Mac/Linux: `touch fileName.test.js`, for Windows: `echo fileName.test.js`
* you can create new files also manually of course
4. on the main js file, write a relevant function name with relevant parameters. You can use the names in the example in the relevant md file. Leave you function empty for now. Export the function. 
5. on the test file, import your function from the other file and write your tests including several different cases. 
6. when your tests are ready, turn back to your main.js file and complete your function. 
7. run your tests explained above in use jest part
8. If some tests fail, check the failed tests and try to understand where the problem is. Try until all tests pass. Then refactor your code. 
9. If all tests pass, you are ready to refactor your code. 
10. If you are satisfied with your result, add your changes to the stagign area: `git add .`
11. Commit your changes with a short message telling what has been mainly done: `git commit -m "add blabla"` 
12. Push your changes to your forked remote repo: `git push`
13. Go to your forked Github repo. Click on 'pull requests' and make it.


