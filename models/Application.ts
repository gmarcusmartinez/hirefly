import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

enum StatusEnum {
  pending = 'pending',
  declined = 'declined',
  accepted = 'accepted',
}

interface ApplicationAttrs {
  applicant: string;
  job: string;
}

interface ApplicationDoc extends mongoose.Document {
  applicant: string;
  job: string;
  status: StatusEnum;
}

interface ApplicationModel extends mongoose.Model<ApplicationDoc> {
  build(attrs: ApplicationAttrs): ApplicationDoc;
}

const applicationSchema = new mongoose.Schema<ApplicationDoc>({
  applicant: { type: ObjectId, ref: 'User', required: true },
  job: { type: ObjectId, ref: 'Job', required: true },
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
