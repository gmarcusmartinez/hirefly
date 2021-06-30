import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

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
  skills: string[];
}

interface ProfileDoc extends mongoose.Document {
  userId: string;
  firstName: string;
  lastName: string;
  avatar: string;
  cv: string;
  bio: string;
  link: string;
  location: string;
  skills: string[];
  createSubDoc(): ProfileSubDoc;
}

interface ProfileModel extends mongoose.Model<ProfileDoc> {
  build(attrs: ProfileAttrs): ProfileDoc;
}

const profileSchema = new mongoose.Schema<ProfileDoc>({
  userId: { type: ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String, required: true },
  cv: { type: String, default: '' },
  bio: { type: String, default: '' },
  link: { type: String, default: '' },
  location: { type: String, default: '' },
  skills: { type: [String], default: [] },
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
