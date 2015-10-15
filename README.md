Keboola Orchestration Lambda Trigger

Do you process data from S3 in your orchestration? You can use this script to start the orchestration when the new data are pushed to S3.


## S3 Upload orchestration trigger

- Sign in to AWS Console
- Create new Lambda function and paste content of `index.js` as Lambda code
- Fill the `STORAGE_API_TOKEN` and `ORCHESTRATION_ID` in code
- Set Event source to S3 and set your bucket and prefix
