import { Meta, Story } from '@storybook/react';

import Switch, { SwitchProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/Switch',
  component: Switch,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: ['Compras online', 'Compras offline'],
  onChange: () => console.log('test'),
};
