import { Button } from ".";

const Template = ({ color, background, click }) =>
  `
  <drk-container>
    <drk-button click="${click}" color="${color}" background="${background}">
      Click Me
    </drk-button>
  </drk-container>
  `;

export default {
  component: Button,
  title: "Library/Components/Button",
};

export const Default = Template.bind({});
Default.args = {
  color: "white",
  background: "#0fa",
  click: "return new Promise((r) => setTimeout(r, 2000))",
};
