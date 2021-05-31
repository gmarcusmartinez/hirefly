export const bio = { label: 'Bio' };
export const textInputs = [
  { label: 'First Name' },
  { label: 'Last Name' },
  { label: 'Location', required: true },
  { label: 'Link', required: true },
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
