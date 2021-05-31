export const textInputs = [
  {
    label: 'First Name',
    required: true,
    value: 'firstName',
    name: 'firstName',
  },
  { label: 'Last Name', required: true, value: 'lastName', name: 'lastName' },
  { label: 'Comapany', value: 'comapany', name: 'comapany' },
  { label: 'Link', value: 'link', name: 'link' },
];
export const fileInputs = [{ label: 'Image', required: true }];

export const defaultForm = {
  firstName: '',
  lastName: '',
  company: '',
  link: '',
  avatar: '',
};
