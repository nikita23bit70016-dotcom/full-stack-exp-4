import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';

const sampleCards = [
  { id: 1, title: 'Card One' },
  { id: 2, title: 'Card Two' },
];

describe('CardList Snapshot Tests', () => {
  test('matches snapshot in loading state', () => {
    const { asFragment } = render(<CardList status="loading" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot in error state', () => {
    const { asFragment } = render(<CardList status="error" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot in empty state', () => {
    const { asFragment } = render(<CardList status="done" cards={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with data loaded', () => {
    const { asFragment } = render(<CardList status="done" cards={sampleCards} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
