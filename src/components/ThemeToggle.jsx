import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setIsDark(document.documentElement.classList.contains("dark"));
	}, []);

	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");
		const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
		localStorage.setItem("theme", newTheme);
		setIsDark(newTheme === "dark");

	};

	return (
		<motion.button
			onClick={toggleTheme}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
			className="fixed top-6 right-6 md:right-12 z-50 border border-border bg-card/90 backdrop-blur-md rounded-full px-4 py-2 text-sm shadow-sm hover:border-accent hover:text-accent transition-all duration-300"
		>
			{isDark ? "☀️" : "🌙"}
		</motion.button>
	);
}
