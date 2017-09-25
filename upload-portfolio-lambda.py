import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:341361539889:deployPortfolioTopic')
    try:
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    
        portfolio_bucket = s3.Bucket('portfolio.flexile.co.nz')
        build_bucket = s3.Bucket('portfoliobuild.flexile.co.nz')
    
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
    
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
                
        print("job done")
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully")

    except:
        topic.publish(Subject="Portfolio NOT Deployed", Message="Portfolio deployment failed")
    return 'Hello from Lambda'