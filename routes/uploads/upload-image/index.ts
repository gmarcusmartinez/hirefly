import { v4 } from 'uuid';
import { Request, Response } from 'express';
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

export const uploadImage = async (req: Request, res: Response) => {
  // @ts-ignore
  const type = req.query.type!.split('/')[1];
  const key = `${req.currentUser!._id}/${v4()}.${type}`;
  const signedUrlExpireSeconds = 60 * 15;

  const url = await s3.getSignedUrl('putObject', {
    Bucket: 'hirefly-mvp-bucket',
    ContentType: `${req.query.type}`,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });

  res.json({ key, url });
};
