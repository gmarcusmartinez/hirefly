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
  description: string;
  location: string;
  salary: number;
  skills: string[];
}

interface JobDoc extends mongoose.Document {
  creator: string;
  imgUrl: string;
  title: string;
  company: string;
  description: string;
  location: string;
  salary: number;
  skills: string[];
  category: JobCategory;
  duration: number;
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
