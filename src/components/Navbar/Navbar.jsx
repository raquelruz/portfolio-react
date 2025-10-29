import { motion } from "framer-motion";

export const Navbar = () => {
	return (
		<motion.nav
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-[color:var(--color-border)] shadow-[0_2px_10px_rgba(0,0,0,0.05)] px-6 py-2 rounded-full flex items-center gap-6 text-sm font-medium z-50"
		>
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
				className="px-4 py-1.5 bg-accent text-white rounded-full hover:bg-bg transition shadow-sm"
			>
				¡Contáctame!
			</a>
		</motion.nav>
	);
};
