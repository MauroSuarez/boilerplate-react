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
const TemplatePrimary: Story<ButtonProps> = (props) => <Button {...props} />;
export const Primary = TemplatePrimary.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  disabled: false,
  loading: false,
  size: 'md',
  classes: '',
};

const TemplateSecondary: Story<ButtonProps> = (props) => <Button {...props} />;
export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  disabled: false,
  loading: false,
  size: 'md',
  classes: '',
};
