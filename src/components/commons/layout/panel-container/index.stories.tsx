import { Meta, Story } from '@storybook/react';

import PanelContainer, { PanelContainerProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/PanelContainer',
  component: PanelContainer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<PanelContainerProps> = (props) => <PanelContainer {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '',
  className: '',
  variant: 'cols',
  count: '3',
};
