import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { SidebarHeader } from "./SidebarHeader";
import {SidebarNav } from "./SidebarNav";
import { SidebarFooter } from "./SidebarFooter";
import { AnimatePresence } from "framer-motion";

export const Sidebar = () => {
	const [isDark, setIsDark] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		}
	}, []);

	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");
		const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
		localStorage.setItem("theme", newTheme);
		setIsDark(newTheme === "dark");
	};

	const handleLinkClick = () => setMenuOpen(false);

	return (
		<div>
			<button
				className="fixed top-4 left-4 z-50 p-2 bg-accent text-bg rounded-md shadow-md md:hidden"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				{menuOpen ? <X size={22} /> : <Menu size={22} />}
			</button>

			{/* DESKTOP */}
			<aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex-col justify-between p-6 z-40">
				<SidebarHeader />
				<SidebarNav onLinkClick={handleLinkClick} />
				<SidebarFooter isDark={isDark} toggleTheme={toggleTheme} />
			</aside>

			{/* MOBILE */}
			<AnimatePresence>
				{menuOpen && (
					<SidebarOverlay onClose={() => setMenuOpen(false)}>
						<SidebarHeader />
						<SidebarNav onLinkClick={handleLinkClick} />
						<SidebarFooter isDark={isDark} toggleTheme={toggleTheme} />
					</SidebarOverlay>
				)}
			</AnimatePresence>
		</div>
	);
};
