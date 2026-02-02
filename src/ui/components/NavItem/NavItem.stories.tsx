import type { StoryObj } from '@storybook/react-webpack5';
import { MemoryRouter } from 'react-router-dom';

import NavItem from './NavItem';
import { BoardIcon } from '../Icons';

const meta = {
  title: 'NavItem',
  component: NavItem,
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

export const Base: Story = {
  args: {
    children: (
      <>
        <BoardIcon />
        <span>Board</span>
      </>
    ),
    to: '#',
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: (
      <>
        <BoardIcon />
        <span>Board</span>
      </>
    ),
    to: '#',
    active: true,
  },
};
