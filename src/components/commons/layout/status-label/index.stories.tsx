import { Meta, Story } from '@storybook/react';

import StatusLabel, { StatusLabelProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/StatusLabel',
  component: StatusLabel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<StatusLabelProps> = (props) => <StatusLabel {...props} />;

export const Success = Template.bind({});
Success.args = {
  classes: '',
  children: 'Compra exitosa',
  variant: 'success',
};
