import { Meta, Story } from '@storybook/react';

import Panel from '../panel';

import PanelContainer, { PanelContainerProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/PanelContainer',
  component: PanelContainer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const Template: Story<PanelContainerProps> = () => {
  return (
    <>
      <PanelContainer count={'3'} variant="cols">
        <Panel variant={'2'} title={'Detalle del producto'} separator="primary" classes="h-full">
          Panel left 1
        </Panel>
        <PanelContainer count={'1'} variant="cols">
          <Panel
            variant={'1'}
            classes="grid-cols-1 items-start lg:mt-0 md:mt-0 sm:mt-0 lg:mt-0 md:tm-0 sm:mt-0 mt-4"
          >
            Panel right 1
          </Panel>
          <Panel
            variant={'1'}
            title={<p className="text-xs">Medio de pago</p>}
            separator="primary"
            classes="grid-cols-1 items-start lg:mt-0 md:mt-0 sm:mt-0 mt-4 lg:bg-white md:bg-white sm:bg-white bg-gray-600"
          >
            Panel right 2
          </Panel>
        </PanelContainer>
      </PanelContainer>
      <PanelContainer count={'1'} variant="cols" classes="mt-4">
        <Panel variant={'1'}>Panel bottom</Panel>
      </PanelContainer>
    </>
  );
};

export const Primary = Template.bind({});
