

//drawer width
export const DRAWER_WIDTH = 300;

//nav link data
type NavProps = {
  title: string;
  path: string;
};
export const nav: NavProps[] = [
  {
    title: "Add Users",
    path: "/admin/add",
  },
];
// select options props
type SelectOptionsProps = {
  value: string;
};
export const selectOptions: SelectOptionsProps[] = [
  { value: "User" },
  { value: "Moderator" },
  { value: "Editor" },
];

export const selectOccupation: SelectOptionsProps[] = [
  { value: "Web Developer" },
  { value: "Software Engeneer" },
  { value: "Doctor" },
  { value: "Ethical Hacker" },
];
