// import { useEffect, useState } from "react";

// export const Navbar = () => {
// 	const [isDark, setIsDark] = useState(false);

// 	// Cargar tema guardado
// 	useEffect(() => {
// 		const theme = localStorage.getItem("theme");
// 		if (theme === "dark") {
// 			document.documentElement.classList.add("dark");
// 			setIsDark(true);
// 		}
// 	}, []);

// 	// Cambiar tema
// 	const toggleTheme = () => {
// 		document.documentElement.classList.toggle("dark");
// 		const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
// 		localStorage.setItem("theme", newTheme);
// 		setIsDark(newTheme === "dark");
// 	};

// 	return (
// 		<nav className="fixed top-0 left-0 w-full z-50 bg-[--color-bg]/80 backdrop-blur-md border-b border-[--color-accent]/20 transition-all duration-300">
// 			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
// 				{/* LOGO */}
// 				<a href="#home" className="text-[--color-accent] text-3xl font-title hover:opacity-80 transition">
// 					Raquel<span className="text-[--color-text]">Ruz</span>
// 				</a>

// 				{/* BOTÓN DE TEMA */}
// 				<button
// 					onClick={toggleTheme}
// 					className="ml-6 border border-[--color-accent]/30 px-3 py-2 rounded-full hover:bg-[--color-accent]/10 transition"
// 					title="Cambiar tema"
// 				>
// 					{isDark ? "☀️" : "🌙"}
// 				</button>
// 			</div>
// 		</nav>
// 	);
// }
