import { Meta, Story } from '@storybook/react';

import Toast, { ToastProps } from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Toast',
  component: Toast,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<ToastProps> = (props) => <Toast {...props} />;

export const Default = Template.bind({});
Default.args = {
  classes: '',
  title: 'Title toast',
  text: 'Text toast',
};
