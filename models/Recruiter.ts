import mongoose from 'mongoose';

interface RecruiterAttrs {
  avatar: string;
  company: string;
  firstName: string;
  lastName: string;
  link: string;
  location: string;
}

interface RecruiterDoc extends mongoose.Document {
  userId: string;
  avatar: string;
  company: string;
  firstName: string;
  lastName: string;
  link: string;
  location: string;
}

interface RecruiterModel extends mongoose.Model<RecruiterDoc> {
  build(attrs: RecruiterAttrs): RecruiterDoc;
}

const recruiterSchema = new mongoose.Schema<RecruiterDoc>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  avatar: { type: String, required: true },
  company: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  link: { type: String, default: '' },
  location: { type: String, default: '' },
});

recruiterSchema.statics.build = (attrs: RecruiterAttrs) => new Recruiter(attrs);

const Recruiter = mongoose.model<RecruiterDoc, RecruiterModel>(
  'Recruiter',
  recruiterSchema
);
export { Recruiter };
