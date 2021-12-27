import { Meta, Story } from '@storybook/react';

import ButtonMore, { ButtonMoreProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/ButtonMore',
  component: ButtonMore,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<ButtonMoreProps> = (props) => <ButtonMore {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  classes: '',
  items: [
    { text: 'element 1', isVisible: true, onClick: () => console.log('Element 1') },
    { text: 'element 2', isVisible: true, onClick: () => console.log('Element 2') },
  ],
  variant: 'primary',
  open: false,
  onClick: () => console.log('Click'),
};
