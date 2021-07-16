export const texts = [
  { label: 'First Name', name: 'firstName', required: true },
  { label: 'Last Name', name: 'lastName', required: true },
  { label: 'Location', name: 'location' },
  { label: 'Link', name: 'link' },
  { label: 'Bio', value: 'bio', name: 'bio' },
];

export const files = [
  {
    label: 'Choose Image',
    accept: 'image/*',
    required: true,
    icon: 'photo_camera',
  },
  {
    label: 'Upload CV',
    accept: 'image/*',
    icon: 'description',
  },
];

export const blankForm = {
  firstName: '',
  lastName: '',
  location: '',
  link: '',
  imgUrl: '',
  cv: '',
  period: 'full-time',
  position: 'backend',
  bio: '',
};
