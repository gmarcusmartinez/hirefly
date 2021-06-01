export const textInputs = [
  { label: 'First Name', name: 'firstName', required: true },
  { label: 'Last Name', name: 'lastName', required: true },
  { label: 'Location', name: 'location' },
  { label: 'Link', name: 'link' },
  { label: 'Bio', value: 'bio', name: 'bio' },
];

export const fileInputs = [
  { label: 'Image', accept: 'image/*', required: true },
  { label: 'CV', accept: 'image/*' },
];

export const selectInputs = [
  {
    label: 'Period',
    required: true,
    options: ['full-time', 'part-time'],
    name: 'period',
  },
  {
    label: 'Position',
    required: true,
    options: ['backend', 'frontend', 'fullstack'],
    name: 'position',
  },
];

export const defaultForm = {
  firstName: 'Marcus',
  lastName: 'Maritinez',
  location: 'Berlin Germany',
  link: '',
  avatar: 'fake-img.com',
  cv: '',
  period: 'full-time',
  position: 'backend',
  bio: 'Just a big dog.',
};
