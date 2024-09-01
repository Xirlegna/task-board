import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  describe('Layout', () => {
    test.each([{ name: 'minimize' }, { name: 'resize' }, { name: 'close' }])(
      'has $name button',
      ({ name }) => {
        render(<Header />);

        const button: HTMLAnchorElement = screen.getByRole('button', { name });

        expect(button).toBeDefined();
      }
    );
  });
});
