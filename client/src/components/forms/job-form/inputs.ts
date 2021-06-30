export const texts = [
  { label: 'Job Title', name: 'title', required: true },
  { label: 'Company', name: 'company' },
  { label: 'Location', name: 'location' },
  { label: 'Link', name: 'link' },
  { label: 'Description', name: 'desc' },
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

export const selects = [
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
  {
    label: 'Category',
    required: true,
    options: ['web development', 'design', 'data analysis', 'A.I'],
    name: 'category',
  },
];

export const blankForm = {
  title: '',
  company: '',
  location: '',
  link: '',
  description: '',
  img: '',
  period: 'full-time',
  position: 'backend',
  category: 'web development',
};
