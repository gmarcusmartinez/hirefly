import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

export interface JobAttrs {
  creator: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  skills: string[];
}

interface JobDoc extends mongoose.Document {
  creator: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  skils: string[];
}

interface JobModel extends mongoose.Model<JobDoc> {
  build(attrs: JobAttrs): JobDoc;
}

const jobSchema = new mongoose.Schema<JobDoc>({
  creator: { type: ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  location: { type: String, required: true, trim: true },
  salary: { type: Number, required: true },
  skills: { type: [String], default: [] },
});

jobSchema.statics.build = (attrs: JobAttrs) => new Job(attrs);

const Job = mongoose.model<JobDoc, JobModel>('Job', jobSchema);
export { Job };
