import { Meta, Story } from '@storybook/react';

import Alert, { AlertProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const TemplateError: Story<AlertProps> = (props) => <Alert {...props} />;

export const Error = TemplateError.bind({});
Error.args = {
  classes: '',
  children: 'Error',
  variant: 'error',
};

const TemplateWarning: Story<AlertProps> = (props) => <Alert {...props} />;

export const Warning = TemplateWarning.bind({});
Warning.args = {
  classes: '',
  children: 'Warning',
  variant: 'warning',
};

const TemplateH3: Story<AlertProps> = (props) => <Alert {...props} />;

export const Info = TemplateH3.bind({});
Info.args = {
  classes: '',
  children: 'Info',
  variant: 'info',
};

const TemplateSuccess: Story<AlertProps> = (props) => <Alert {...props} />;

export const Success = TemplateSuccess.bind({});
Success.args = {
  classes: 'py-2',
  children: 'Success override padding Y',
  variant: 'success',
};
