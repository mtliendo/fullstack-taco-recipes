import { BackendStack } from './exports.json'

export const config = {
	aws_project_region: BackendStack.AppRegion,
	Auth: {
		region: BackendStack.AppRegion,
		userPoolId: BackendStack.UserPoolId,
		userPoolWebClientId: BackendStack.UserPoolClientId,
		identityPoolId: BackendStack.IdentityPoolId,
	},
	aws_appsync_graphqlEndpoint: BackendStack.AppSyncAPIEndpoint,
	aws_appsync_region: BackendStack.AppRegion,
	aws_appsync_authenticationType: BackendStack.AppSyncAuthType,
}
