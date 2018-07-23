# node-react-redis-jest-blogs-project
#Starting a project which contains the technologies like node, react, redis, jest for unit/integration testing

# This Project contains a blog application, where users can create and view blogs. 
# Also, developers can perform unit/integrate testing on this project using Jest library.

#Steps to run the Application

# 1. Goto your directory where the project is downloaded.
# 2. Do npm install.
# 3. Goto AdvancedNodeStarter folder where server code is present
# 4. Do npm install.
# 5. Goto client folder within AdvancedNodeStarter and do npm install.

# There are multiple npm installs for the following reasons -
# 1. Initial npm install is to install express server and understand how node works.
#     Basic demo examples have been given in this folder.
# 2. Once we are familiar with node, then we do another npm install inside "AdvancedNodeStarter".
#     This is done to install all server side dependencies to run the project.
# 3. The last npm install is done in client folder to install all the client dependencies.

# Once all the installations(npm) are done, open dev.js(AdvancedNodeStarter/config/dev.js)
# Create a Mongo instance in your system and paste your MongoURI in the dev.js -> mongoURI section.

#Finally, run "npm run dev" to start the server and the application
#Last but not least, if you want to run the Jest test (unit/integration testing) run "npm run test" in another terminal tab.
