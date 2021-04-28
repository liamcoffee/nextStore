import { render, screen, waitFor, act } from "../test-utils";
import Home from "@pages/index";
import { apolloMockProducts } from "../__fixtures__/products";

describe("Home", () => {
	it("renders without crashing", async () => {
		render(<Home />, {
			apollo: apolloMockProducts,
		});

		await waitFor(() => new Promise((res) => setTimeout(res, 1)));

		await waitFor(() => {
			expect(screen.getByText("Argan")).toBeInTheDocument();
		});
	});

	it.skip("should not have basic accessibility issues", async () => {
		const { container } = render(<Button>{buttonText}</Button>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
