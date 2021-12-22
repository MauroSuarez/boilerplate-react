import { Meta, Story } from '@storybook/react';

import Panel, { PanelProps } from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Panel',
  component: Panel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<PanelProps> = (args) => <Panel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Panel',
  classes: '',
  variant: '2',
};
