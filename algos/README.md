
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
1. Go to the relevant week folder
2. Create a new js file ``
3. Create a new test js file ``