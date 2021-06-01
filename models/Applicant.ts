import mongoose from 'mongoose';

enum PositionEnum {
  backend = 'backend',
  frontend = 'frontend',
  fullstack = 'fullstack',
}

enum PeriodEnum {
  fulltime = 'full-time',
  parttime = 'part-time',
}

interface ApplicantAttrs {
  avatar: string;
  cv: string;
  bio: string;
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
  bio: string;
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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  avatar: { type: String, required: true },
  cv: { type: String, default: '' },
  bio: { type: String, default: '' },
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
