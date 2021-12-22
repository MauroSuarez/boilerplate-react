import { Meta, Story } from '@storybook/react';

import Separator, { SeparatorProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/Separator',
  component: Separator,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<SeparatorProps> = (props) => <Separator {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  classes: '',
  variant: 'primary',
};
