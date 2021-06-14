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

export interface ProfileSubDoc {
  _id: string;
  firstName: string;
  avatar: string;
}

interface ProfileAttrs {
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

interface ProfileDoc extends mongoose.Document {
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
  createSubDoc(): ProfileSubDoc;
}

interface ProfileModel extends mongoose.Model<ProfileDoc> {
  build(attrs: ProfileAttrs): ProfileDoc;
}

const profileSchema = new mongoose.Schema<ProfileDoc>({
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

profileSchema.statics.build = (attrs: ProfileAttrs) => new Profile(attrs);

profileSchema.methods.createSubDoc = function () {
  const { userId, firstName, avatar } = this;
  return { _id: userId, firstName, avatar };
};

const Profile = mongoose.model<ProfileDoc, ProfileModel>(
  'Profile',
  profileSchema
);
export { Profile };
``;
