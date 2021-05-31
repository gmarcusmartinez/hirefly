export const bio = { label: 'Bio', value: 'bio', name: 'bio' };

export const textInputs = [
  {
    label: 'First Name',
    required: true,
    value: 'firstName',
    name: 'firstName',
  },
  { label: 'Last Name', required: true, value: 'lastName', name: 'lastName' },
  { label: 'Location', value: 'location', name: 'location' },
  { label: 'Link', value: 'link', name: 'link' },
];
export const fileInputs = [{ label: 'Image', required: true }, { label: 'CV' }];
export const selectInputs = [
  { label: 'Period', required: true, options: ['full time', 'part time'] },
  {
    label: 'Position',
    required: true,
    options: ['backend', 'frontend', 'fullstack'],
  },
];

export const defaultForm = {
  firstName: '',
  lastName: '',
  location: '',
  link: '',
  avatar: '',
  cv: '',
  period: '',
  position: '',
  bio: '',
};
