export const texts = [
  { label: "Job Title", name: "title", required: true },
  { label: "Company", name: "company" },
  { label: "Location", name: "location" },
  { label: "Salary", name: "salary", info: "in €" },
  { label: "Link", name: "link" },
  { label: "Description", name: "description" },
  { label: "Job Duration", name: "duration", info: "# of months" },
  { label: "Skills", name: "skills", info: "separate with commas" },
];

export const files = [
  {
    label: "Choose Image",
    accept: "image/*",
    required: true,
    icon: "photo_camera",
  },
  {
    label: "Upload CV",
    accept: "image/*",
    icon: "description",
  },
];

export const selects = [
  {
    label: "Position",
    required: true,
    options: ["backend", "frontend", "fullstack"],
    name: "position",
  },
  {
    label: "Category",
    required: true,
    options: ["web development", "design", "data analysis", "A.I"],
    name: "category",
  },
];

export const blankForm = {
  category: "",
  company: "",
  description: "",
  duration: 1,
  imgUrl: "",
  link: "",
  location: "",
  position: "",
  salary: 0,
  skills: "",
  title: "",
};
