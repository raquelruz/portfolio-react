import { Navbar } from "../Navbar/Navbar";
import ThemeToggle from "../ThemeToggle";

export const BaseLayout = ({ children }) => {
	return (
		<div className="relative flex flex-col bg-red text-text border border-border">
			<Navbar />

			<ThemeToggle />
			<main className="flex-1 w-full">{children}</main>
		</div>
	);
};
