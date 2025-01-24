import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('should render left by default', () => {
    render(<Hero left={<div>Left component</div>} />);
    expect(screen.getByText('Left component')).toBeInTheDocument();
  });

  it('should render right component', () => {
    render(
      <Hero
        left={<div>Left component</div>}
        right={<div>Right component</div>}
      />
    );
    expect(screen.getByText('Left component')).toBeInTheDocument();
    expect(screen.getByText('Right component')).toBeInTheDocument();
  });
});
