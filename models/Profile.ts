import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

export interface ProfileSubDoc {
  _id: string;
  firstName: string;
  imgUrl: string;
}

enum Gender {
  male = 'male',
  female = 'female',
  nonbinary = 'nonbinary',
}

interface ProfileAttrs {
  imgUrl: string;
  bio: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  gender: string;
  link: string;
  skills: string[];
}

interface ProfileDoc extends mongoose.Document {
  userId: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  link: string;
  gender: string;
  imgUrl: string;
  bio: string;
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
  city: { type: String, default: '' },
  country: { type: String, default: '' },
  link: { type: String, default: '' },
  gender: {
    type: String,
    enum: Object.values(Gender),
    default: Gender.male,
  },
  imgUrl: { type: String, required: true },
  bio: { type: String, default: '' },
  skills: { type: [String], default: [] },
});

profileSchema.statics.build = (attrs: ProfileAttrs) => new Profile(attrs);

profileSchema.methods.createSubDoc = function () {
  const { userId, firstName, imgUrl } = this;
  return { _id: userId, firstName, imgUrl };
};

const Profile = mongoose.model<ProfileDoc, ProfileModel>(
  'Profile',
  profileSchema
);
export { Profile };
