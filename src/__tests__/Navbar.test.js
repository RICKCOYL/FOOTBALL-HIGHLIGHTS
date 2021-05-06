import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Home component test', () => {
  test('should renders welcome text', () => {
    render(<Navbar />);
    const text = screen.getByText('HOME');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Navbar />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
