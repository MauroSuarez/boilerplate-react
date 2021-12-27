import { Meta, Story } from '@storybook/react';

import Typography, { TypographyProps } from '.';

const meta: Meta = {
  title: 'Components/Commons/Layout/Typography',
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
const TemplateH1: Story<TypographyProps> = (props) => <Typography {...props} />;

export const H1 = TemplateH1.bind({});
H1.args = {
  classes: '',
  component: 'h1',
  children: 'Titulo H1',
  variant: 'primary',
};

const TemplateH2: Story<TypographyProps> = (props) => <Typography {...props} />;

export const H2 = TemplateH2.bind({});
H2.args = {
  classes: '',
  component: 'h2',
  children: 'Titulo H2',
  variant: 'secondary',
};

const TemplateH3: Story<TypographyProps> = (props) => <Typography {...props} />;

export const H3 = TemplateH3.bind({});
H3.args = {
  classes: '',
  component: 'h3',
  children: 'Titulo H3',
  variant: 'tertiary',
};

const TemplateH4: Story<TypographyProps> = (props) => <Typography {...props} />;

export const H4 = TemplateH4.bind({});
H4.args = {
  classes: '',
  component: 'h4',
  children: 'Titulo H4',
  variant: 'tertiary',
};

const TemplateH5: Story<TypographyProps> = (props) => <Typography {...props} />;

export const H5 = TemplateH5.bind({});
H5.args = {
  classes: '',
  component: 'h5',
  children: 'Titulo H5',
  variant: 'tertiary',
};

const TemplateH6: Story<TypographyProps> = (props) => <Typography {...props} />;

export const H6 = TemplateH6.bind({});
H6.args = {
  classes: '',
  component: 'h6',
  children: 'Titulo H6',
  variant: 'tertiary',
};

const TemplateP: Story<TypographyProps> = (props) => <Typography {...props} />;

export const P = TemplateP.bind({});
P.args = {
  classes: '',
  component: 'p',
  children: 'Párrafo',
  variant: 'tertiary',
};
