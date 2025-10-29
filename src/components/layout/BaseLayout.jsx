import { Navbar } from "../Navbar/Navbar";
import ThemeToggle from "../ThemeToggle";

export const BaseLayout = ({ children }) => {
	return (
		<div className="relative flex flex-col min-h-screen bg-bg text-text">
			<Navbar />

			<ThemeToggle />
			<main className="flex-1 w-full px-6 md:px-12 py-20">{children}</main>
		</div>
	);
};
