import { axe, toHaveNoViolations } from 'jest-axe';
import { render, screen } from '../../test-utils';
import { Button } from '../Button';

const buttonText = 'button';
expect.extend(toHaveNoViolations);

// Basic rendering test
// installed jest-axe to give some confidence with accessibility

describe('Button', () => {
	test('Should render a button', async () => {
		render(<Button>{buttonText}</Button>);
		expect(screen.getByText(buttonText)).toBeDefined();
	});

	test('Button should not have basic accessibility issues', async () => {
		const { container } = render(<Button>{buttonText}</Button>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
