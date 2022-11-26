import { Button } from ".";

const Template = ({ click }) =>
  `
  <drk-container>
    <drk-button click="${click}">
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
  click: "return new Promise((r) => setTimeout(r, 2000))",
};
