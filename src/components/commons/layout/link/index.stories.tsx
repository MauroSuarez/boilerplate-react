import { Meta, Story } from '@storybook/react';

import Link, { LinkProps } from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Link',
  component: Link,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Descargar boleta',
  classes: '',
  variant: 'primary',
  disabled: true,
};
