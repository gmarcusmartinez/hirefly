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

export interface JobAttrs {
  creator: string;
  title: string;
  company: string;
  link?: string;
  position: string;
  category: string;
  minSalary: number;
  maxSalary: number;
  city: string;
  country: string;
  imgUrl: string;
  description: string;
  skills: string[];
}

interface JobDoc extends mongoose.Document {
  creator: string;
  title: string;
  company: string;
  link?: string;
  position: string;
  category: string;
  minSalary: number;
  maxSalary: number;
  city: string;
  country: string;
  imgUrl: string;
  description: string;
  skills: string[];
}

interface JobModel extends mongoose.Model<JobDoc> {
  build(attrs: JobAttrs): JobDoc;
}

const jobSchema = new mongoose.Schema<JobDoc>({
  creator: { type: ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  company: { type: String, trim: true },
  link: { type: String, trim: true },
  position: {
    type: String,
    enum: Object.values(PositionEnum),
    default: PositionEnum.backend,
  },
  category: {
    type: String,
    enum: Object.values(JobCategory),
    default: JobCategory.webdev,
  },
  minSalary: { type: Number, default: 0 },
  maxSalary: { type: Number, default: 0 },
  city: { type: String, trim: true },
  country: { type: String, trim: true },
  imgUrl: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  skills: { type: [String], default: [] },
});

jobSchema.statics.build = (attrs: JobAttrs) => new Job(attrs);

const Job = mongoose.model<JobDoc, JobModel>('Job', jobSchema);
export { Job };
