import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

enum JobCategory {
  webdev = 'web development',
  design = 'design',
  data = 'data analysis',
  ai = 'A.I',
}

enum PositionEnum {
  backend = 'backend',
  frontend = 'frontend',
  fullstack = 'fullstack',
}

enum PeriodEnum {
  fulltime = 'full-time',
  parttime = 'part-time',
}

export interface JobAttrs {
  creator: string;
  imgUrl: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  skills: string[];
}

interface JobDoc extends mongoose.Document {
  creator: string;
  imgUrl: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  skills: string[];
  category: JobCategory;
  period: PeriodEnum;
  position: PositionEnum;
}

interface JobModel extends mongoose.Model<JobDoc> {
  build(attrs: JobAttrs): JobDoc;
}

const jobSchema = new mongoose.Schema<JobDoc>({
  creator: { type: ObjectId, ref: 'User', required: true },
  imgUrl: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  location: { type: String, required: true, trim: true },
  salary: { type: Number, required: true },
  skills: { type: [String], default: [] },
  category: {
    type: String,
    enum: Object.values(JobCategory),
    default: JobCategory.webdev,
  },
  period: {
    type: String,
    enum: Object.values(PeriodEnum),
    default: PeriodEnum.fulltime,
  },
  position: {
    type: String,
    enum: Object.values(PositionEnum),
    default: PositionEnum.backend,
  },
});

jobSchema.statics.build = (attrs: JobAttrs) => new Job(attrs);

const Job = mongoose.model<JobDoc, JobModel>('Job', jobSchema);
export { Job };
