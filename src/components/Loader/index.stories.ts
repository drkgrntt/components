import { Loader } from ".";

const Template = ({ size, color }) =>
  `<drk-loader color="${color}" size="${size}" />`;

export default {
  component: Loader,
  title: "Library/Components/Loader",
};

export const Default = Template.bind({});
Default.args = {
  color: "#0fa",
  size: "32px",
};
