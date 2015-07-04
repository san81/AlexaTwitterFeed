# AlexaTwitterFeed
Amazon Echo Alexa command to fetch twitter feed

Started with the Alexa color schema skill example and created this new skill

Packaged  "Ask twitterfeed"  Alexa skill - written in Nodejs
 +Dependent nodejs modules are packaged as per the documentation @ https://aws.amazon.com/blogs/compute/nodejs-packages-in-lambda/

Creating Aws Lamda : 
  +Zip the entire checkout folder and create the aws amazon lambda function by uploading this zip file
  +Associate your lambda function with Alexa skill as the triggering event
  
Creating new Alexa skill at Amazon developer site : @ https://developer.amazon.com/edw/home.html#/
  +Associate your new Alexa skill with the aws lambda arn  ( Amazon Resource Name )
  
