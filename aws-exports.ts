import cdkOutputs from './exports.json'

export const config = {
	aws_project_region: cdkOutputs.BackendStack.AppRegion,
	Auth: {
		region: cdkOutputs.BackendStack.AppRegion,
		userPoolId: cdkOutputs.BackendStack.UserPoolId,
		userPoolWebClientId: cdkOutputs.BackendStack.UserPoolClientId,
		identityPoolId: cdkOutputs.BackendStack.IdentityPoolId,
	},
	aws_appsync_graphqlEndpoint: cdkOutputs.BackendStack.AppSyncAPIEndpoint,
	aws_appsync_region: cdkOutputs.BackendStack.AppRegion,
	aws_appsync_authenticationType: cdkOutputs.BackendStack.AppSyncAuthType,
}
