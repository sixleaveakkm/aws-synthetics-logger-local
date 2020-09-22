# aws-synthetics-logger-local

This a simple alternative library to develop [AWS Synthetics Canary](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Function_Library.html) locally.

Cooperate with [aws-synthetics-logger](https://www.npmjs.com/package/@sixleaveakkm/aws-synthetics-local)

For no code change replacement, add following two develop dependencies to your `package.json`
```json
{
    "devDependencies": {
        "Synthetics": "npm:@sixleaveakkm/aws-synthetics-local@0.1.6",
        "SyntheticsLogger": "npm:@sixleaveakkm/aws-synthetics-logger-local@0.1.6"
    }
}
```
