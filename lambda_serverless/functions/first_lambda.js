'use strict';


//parses csv file, turns it into json
module.exports.handler = async (event) => {
  console.log("event is ", event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

//run with serverless invoke local --stage dev --aws-profile vscode_user -f firstLambda
//serverless invoke local --stage dev --aws-profile vscode_user -f firstLambda -d '{"x": 3}'

// serverless invoke local --stage dev --aws-profile vscode_user -f firstLambda -d '{\"type\": \"troySacrificePrompt\", \"messagesSoFar\": [{\"sender\":\"user\", \"message\":\"hello world\"}], \"luck\":20}'
//go to lambda, us-west-2 to see deployment

/*
deploying to aws
serverless deploy --stage dev --aws-profile vscode_user
*/

/*
invoke in cloud
[in console] = monitor -> cloud watch

serverless invoke --stage dev --aws-profile vscode_user -f firstLambda
*/

//if modifying config , leave out -f