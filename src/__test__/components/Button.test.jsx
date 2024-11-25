import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
    test("renders button with label", () => {
        render(<Button label="Click me" />);
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Click me");
    })
})