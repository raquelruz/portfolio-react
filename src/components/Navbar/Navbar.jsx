import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section>
			<ThemeToggle />

			<motion.nav
				initial={{ y: -40, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="fixed top-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-md border border-border shadow-md px-6 py-2 rounded-full flex items-center gap-6 text-sm font-medium z-50 transition-colors duration-500"
			>
				{/* Desktop */}
				<div className="hidden md:flex items-center gap-6">
					<a href="#projects" className="hover:text-accent transition">
						Proyectos
					</a>

					<a href="#skills" className="hover:text-accent transition">
						Skills
					</a>

					<a href="#about" className="hover:text-accent transition">
						Sobre mí
					</a>

					<a
						href="https://www.linkedin.com/in/raquel-ruiz-lopez"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-accent transition"
					>
						LinkedIn
					</a>

					<a
						href="#contact"
						className="px-4 py-1.5 bg-accent text-bg rounded-full hover:bg-accent hover:shadow-[0_0_10px_rgba(0,255,204,0.4)] transition-all duration-300 shadow-sm"
					>
						¡Contáctame!
					</a>
				</div>

				{/* Mobile */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-[color:var(--color-accent)] transition"
				>
					<span className="text-lg">{isOpen ? "✕" : "☰"}</span>
				</button>
			</motion.nav>

			{/* Mobile */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="fixed top-20 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md border border-border shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 z-40 text-sm font-medium md:hidden"
					>
						<a
							href="#projects"
							onClick={() => setIsOpen(false)}
							className="hover:text-accent transition"
						>
							Proyectos
						</a>
						<a
							href="#skills"
							onClick={() => setIsOpen(false)}
							className="hover:text-accent transition"
						>
							Skills
						</a>
						<a
							href="#about"
							onClick={() => setIsOpen(false)}
							className="hover:text-accent transition"
						>
							Sobre mí
						</a>
						<a
							href="https://www.linkedin.com/in/raquel-ruiz-lopez"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setIsOpen(false)}
							className="hover:text-accent transition"
						>
							LinkedIn
						</a>
						<a
							href="#contact"
							onClick={() => setIsOpen(false)}
							className="px-4 py-2 bg-accent text-bg rounded-full hover:bg-accent transition-all duration-300 shadow-sm"
						>
							¡Contáctame!
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
