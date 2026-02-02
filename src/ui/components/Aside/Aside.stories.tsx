import type { StoryObj } from '@storybook/react-webpack5';
import { MemoryRouter } from 'react-router-dom';

import Aside from './Aside';

const meta = {
  title: 'Aside',
  component: Aside,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
