import { Amplify } from 'aws-amplify';

const config = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
  userPoolID: process.env.USERPOOL_ID,
  clientID: process.env.CLIENT_ID,
  identityPoolId: process.env.IDENTITY_POOL_ID
};

export const configure = () => {
  Amplify.configure({
    Auth: {
      userPoolId: config.userPoolID,
      region: config.region,
      identityPoolId: `${config.region}:${config.identityPoolId}`,
      userPoolWebClientId: config.clientID,
    },
    API: {
      aws_appsync_graphqlEndpoint: 'https://fvwtskrj65bt5l7twvnfbrnx4u.appsync-api.eu-west-2.amazonaws.com/graphql',
      aws_appsync_region: config.region,
      aws_appsync_authenticationType: 'AWS_IAM',
    }
  });

};

export default config;