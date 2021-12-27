import type { Meta, Story } from '@storybook/react';

import Paginator, { PaginatorProps } from './';

const meta: Meta = {
  title: 'Components/Commons/Layout/Paginator',
  component: Paginator,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story<PaginatorProps> = (arg) => <Paginator {...arg} />;
Default.args = {
  setPage: () => {
    console.warn('page changed!');
  },
  page: 5,
  maxPage: 20,
};
