# NodePromptManager -- starter template for building Prompt bots with Nodejs

Boiler Plate for Node bots on the https://promptapp.io platform

Heard about this awesome new app called Prompt? 

![alt-image](https://cloud.githubusercontent.com/assets/5935411/13377108/d54d2cce-dd81-11e5-9d9e-4bfd250e5a2d.JPEG)

Wanna start developing your own Prompt bots using Node.js? 

This boilerplate repository should be enough to get you started developing Prompt bots with Nodejs. 

#What our bot does

This hello world bot is as simple as a bot can be in Prompt. If you're familiar with Prompt, this bot receieves a message from an SMS text sent by the user and returns that message to them. 

Ex: ```@Testing_00028 Prompt is awesome!```

Response: ```"Hello World! You said: Prompt is awesome!"```

#Set Up

```git clone https://github.com/PeterKaminski09/NodePromptManager.git```

```cd NodePromptManager```

```npm install*```

*You will not be able to run this command if you do not have npm installed. The best way to install npm is to install node using the node.js installer; npm is installed as part of node. [Click here to install node](https://nodejs.org/en/)

#Set up your webserver

You'll need to make sure this code is available from a public server, so try checking out Azure, Heroku, or DigitalOcean for hosting solutions

I used Microsoft's azure host to get this code up onto a public server. 
https://azure.microsoft.com/en-us/documentation/articles/web-sites-nodejs-develop-deploy-mac/

And Azure has a nifty feature for continuous deployment to update your server code everytime you push changes on your local git. 
https://azure.microsoft.com/en-us/documentation/articles/web-sites-publish-source-control/

Either way, you'll have to get this boilerplate code onto your server somehow. You can either clone this repo directly from your server, or you can follow the azure tutorial for deployment from your command line

#Setting up your bot code

Head on over to: http://developer.promptapp.io/

This is the documentation for the Prompt api. 

After creating a developer account, you can register your own bot.

![alt-img](https://cloud.githubusercontent.com/assets/5935411/13376998/8082e3b2-dd7e-11e5-8aca-833195a43d64.JPEG)

You'll also want to make sure you have defined the API URL under the development section. For our application, all of our routing logic will be in the /api/1.0 directory, 
so make sure you have something along the lines of "https://myhostname:portnumber/api/1.0"

The 1.0 index allows for version control for your bot. 

# Testing it out

Once you have your program up and running onto the server, head over to the testing tab in Prompt. 

Run a simple test using @YourBotNameHere_XYZ this is my message. You're results should look similar to the results below. 

![alt-img](https://cloud.githubusercontent.com/assets/5935411/13377053/9bd1b0de-dd7f-11e5-999d-0bee0fdaf046.JPEG)

Once you're finished with this, you can head over to the api.js file and start implementing your own logic for your bot! 

Happy Hacking!

#____________________________
![@PeterKaminski09](http://github.com/peterkaminski09) and ![@Monte9](http://github.com/monte9) -- HackTech16
