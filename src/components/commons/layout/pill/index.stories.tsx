import type { Meta, Story } from '@storybook/react';

import Pill from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Pill',
  component: Pill,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story = () => <Pill />;
