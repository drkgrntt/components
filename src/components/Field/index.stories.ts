import { Field } from ".";

const Template = () =>
  `
  <drk-container>
    <drk-field validation="Input validation">
      <input slot="input" />
      <label slot="label">Input Label</label>
    </drk-field>

    <drk-field validation="Textarea validation">
      <textarea slot="input"></textarea>
      <label slot="label">Textarea Label</label>
    </drk-field>
  </drk-container>
  `;

export default {
  component: Field,
  title: "Library/Components/Field",
};

export const Default = Template.bind({});
Default.args = {};
