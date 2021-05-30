import mongoose from 'mongoose';

enum PositionEnum {
  backend = 'backend developer',
  frontend = 'frontend developer',
  fullstack = 'fullstack developer',
}

enum PeriodEnum {
  fulltime = 'Full-Time',
  parttime = 'Part-Time',
}

interface ApplicantAttrs {
  userId: string;
  avatar: string;
  cv: string;
  description: string;
  firstName: string;
  lastName: string;
  link: string;
  location: string;
  period: PeriodEnum;
  position: PositionEnum;
}

interface ApplicantDoc extends mongoose.Document {
  userId: string;
  avatar: string;
  cv: string;
  description: string;
  firstName: string;
  lastName: string;
  link: string;
  location: string;
  period: PeriodEnum;
  position: PositionEnum;
}

interface ApplicantModel extends mongoose.Model<ApplicantDoc> {
  build(attrs: ApplicantAttrs): ApplicantDoc;
}

const applicantSchema = new mongoose.Schema<ApplicantDoc>({
  userId: { type: String, required: true },
  avatar: { type: String, required: true },
  cv: { type: String, default: '' },
  description: { type: String, default: '' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  link: { type: String, default: '' },
  location: { type: String, default: '' },
  period: { type: String, required: true, enum: Object.values(PeriodEnum) },
  position: { type: String, required: true, enum: Object.values(PositionEnum) },
});

applicantSchema.statics.build = (attrs: ApplicantAttrs) => new Applicant(attrs);

const Applicant = mongoose.model<ApplicantDoc, ApplicantModel>(
  'Applicant',
  applicantSchema
);
export { Applicant };
