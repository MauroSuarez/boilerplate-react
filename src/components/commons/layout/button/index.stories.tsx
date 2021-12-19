import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<ButtonProps> = (props) => <Button {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  theme: 'primary',
  disabled: false,
  loading: false,
  size: 'md',
};
