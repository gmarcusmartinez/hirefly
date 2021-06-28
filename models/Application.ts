import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

export enum StatusEnum {
  pending = 'pending',
  declined = 'declined',
  accepted = 'accepted',
}

interface ApplicationAttrs {
  applicant: string;
  jobId: string;
}

interface ApplicationDoc extends mongoose.Document {
  applicant: string;
  jobId: string;
  status: string;
}

interface ApplicationModel extends mongoose.Model<ApplicationDoc> {
  build(attrs: ApplicationAttrs): ApplicationDoc;
}

const applicationSchema = new mongoose.Schema<ApplicationDoc>({
  applicant: { type: ObjectId, ref: 'User', required: true },
  jobId: { type: ObjectId, ref: 'Job', required: true },
  status: {
    type: String,
    defualt: StatusEnum.pending,
    enum: Object.values(StatusEnum),
  },
});

applicationSchema.statics.build = (attrs: ApplicationAttrs) =>
  new Application(attrs);

const Application = mongoose.model<ApplicationDoc, ApplicationModel>(
  'Application',
  applicationSchema
);
export { Application };
