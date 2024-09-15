import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Aside from './Aside';

describe('Aside component', () => {
  describe('Layout', () => {
    test.each([
      { name: /Board/, to: '/' },
      { name: /Tasks/, to: '/task' },
      { name: /Goals/, to: '/goal' },
    ])('has $name button', ({ name, to }) => {
      render(
        <HashRouter>
          <Aside />
        </HashRouter>
      );

      const button: HTMLAnchorElement = screen.getByRole('link', { name });

      expect(button).toBeDefined();
      expect(button.href.split('#')[1]).toBe(to);
    });
  });
});
