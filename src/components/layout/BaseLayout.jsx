import { Sidebar } from "../Sidebar/Sidebar";

export const BaseLayout = ({ children }) => {
	return (
		<div className="flex bg-bg text-text min-h-screen transition-colors duration-500">
			<Sidebar />

			<main className="flex-1 w-full md:ml-64 px-6 md:px-12 py-10">{children}</main>
		</div>
	);
};
