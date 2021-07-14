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
  imgUrl: string;
  title: string;
  link?: string;
  description: string;
  location: string;
  salary: number;
  duration: number;
  skills: string[];
}

interface JobDoc extends mongoose.Document {
  category: JobCategory;
  company: string;
  description: string;
  duration: number;
  imgUrl: string;
  link: string;
  location: string;
  position: PositionEnum;
  salary: number;
  title: string;
  creator: string;
  skills: string[];
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
  link: { type: String, default: '' },
  salary: { type: Number, required: true },
  skills: { type: [String], default: [] },
  category: {
    type: String,
    enum: Object.values(JobCategory),
    default: JobCategory.webdev,
  },
  duration: { type: Number, default: 0 },
  position: {
    type: String,
    enum: Object.values(PositionEnum),
    default: PositionEnum.backend,
  },
});

jobSchema.statics.build = (attrs: JobAttrs) => new Job(attrs);

const Job = mongoose.model<JobDoc, JobModel>('Job', jobSchema);
export { Job };
