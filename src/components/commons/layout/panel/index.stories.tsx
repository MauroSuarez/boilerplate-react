import { Meta, Story } from '@storybook/react';

import PanelContainer from '../panel-container';

import Panel, { PanelProps } from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Panel',
  component: Panel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<PanelProps> = () => {
  return (
    <PanelContainer>
      <Panel variant={2}>Panel 1</Panel>
      <Panel variant={1}>Panel 2</Panel>
    </PanelContainer>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: '',
  className: '',
  variant: 2,
};
