import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RuleSeverity from './index';

jest.mock('./i_severity-critical.svg', () => 'critical.svg');
jest.mock('./i_severity-high.svg', () => 'high.svg');
jest.mock('./i_severity-med.svg', () => 'med.svg');
jest.mock('./i_severity-low.svg', () => 'low.svg');
jest.mock('./i_unknown.svg', () => 'unknown.svg');

describe('RuleSeverity', () => {
  it.each([
    ['low', 'Low Severity', 'low.svg'],
    ['medium', 'Medium Severity', 'med.svg'],
    ['high', 'High Severity', 'high.svg'],
    ['critical', 'Critical Severity', 'critical.svg'],
    ['unknown', 'Unknown Severity', 'unknown.svg'],
  ])('renders the %s severity icon', (severity, altText, iconSrc) => {
    render(<RuleSeverity severity={severity} />);

    const icon = screen.getByRole('img', { name: altText });

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', iconSrc);
  });

  it.each(['foo', 'Low', 'Medium', 'High', 'Critical'])(
    'renders the unknown severity icon for unrecognized severity %s',
    severity => {
      render(<RuleSeverity severity={severity} />);

      const icon = screen.getByRole('img', { name: 'Unknown Severity' });

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('src', 'unknown.svg');
    }
  );
});
