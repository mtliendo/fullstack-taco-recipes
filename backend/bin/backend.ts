#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { BackendStack } from '../lib/backend-stack'

const app = new cdk.App()

console.log('the aws branch', process.env.AWS_BRANCH)
new BackendStack(app, 'BackendStack', {
	// env: { account: '123456789012', region: 'us-east-1' },
})
