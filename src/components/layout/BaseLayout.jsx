import { Navbar } from "../Navbar/Navbar";

export const BaseLayout = ({ children }) => {
	return (
		<div className="relative flex flex-col min-h-screen bg-bg text-text transition-colors duration-500">
			<Navbar />

			<main className="flex-1 w-full px-6 md:px-12 py-20">{children}</main>
		</div>
	);
};
