export const blankForm = {
  firstName: '',
  lastName: '',
  city: '',
  country: '',
  link: '',
  gender: 'male',
  imgUrl: '',
  bio: '',
  skills: '',
};

export const texts = [
  { label: 'First Name', name: 'firstName', required: true },
  { label: 'Family Name', name: 'lastName', required: true },
  { label: 'City', name: 'city' },
  { label: 'Country', name: 'country' },
  { label: 'Linkedin Link', name: 'link' },
  { label: 'Bio', name: 'bio' },
];

export const selects = [
  {
    label: 'Gender',
    required: true,
    options: ['male', 'female', 'nonbinary'],
    name: 'gender',
  },
];

export const files = [
  {
    label: 'Choose Image',
    accept: 'image/*',
    required: true,
    icon: 'photo_camera',
  },
];
