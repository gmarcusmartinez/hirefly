import { Request, Response } from 'express';
import { v4 } from 'uuid';
import S3 from 'aws-sdk/clients/s3';
import { Credentials } from 'aws-sdk';
import keys from '../../../config/keys';

const access = new Credentials({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
});

const s3 = new S3({
  credentials: access,
  region: 'eu-central-1',
  signatureVersion: 'v4',
});

export const uploadJobImage = async (req: Request, res: Response) => {
  const key = `${req.currentUser!._id}/jobs/${v4()}.jpeg`;
  const signedUrlExpireSeconds = 60 * 15;

  const url = await s3.getSignedUrl('putObject', {
    Bucket: 'hirefly-bucket',
    ContentType: 'image/jpeg',
    Key: key,
    Expires: signedUrlExpireSeconds,
  });

  res.json({ key, url });
};
