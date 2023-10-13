#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { BackendStack } from '../lib/backend-stack'
import * as gitBranch from 'git-branch'

const app = new cdk.App()

console.log('the aws branch for deploy', process.env.AWS_BRANCH)
console.log('the local branch for deploy', gitBranch.sync())
new BackendStack(app, 'BackendStack', {
	// env: { account: '123456789012', region: 'us-east-1' },
})
