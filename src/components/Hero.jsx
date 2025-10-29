import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<section
			id="home"
			className="flex flex-col items-center justify-center min-h-screen text-center bg-bg text-text px-6"
		>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl md:text-6xl font-bold leading-tight font-landing"
			>
				Raquel Ruiz <br />
				<span>Full Stack Developer</span> & Graphic Designer
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				className="mt-4 text-text/70 text-lg md:text-xl font-landing"
			>
				Construyendo experiencias web creativas en Jerez de la Frontera, España.
			</motion.p>

			<motion.div
				className="flex gap-6 mt-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.8 }}
			>
				<a
					href="#projects"
					className="px-5 py-2 border border-border rounded-full hover:bg-accent hover:text-bg transition"
				>
					Descubre mi trabajo
				</a>
				<a
					href="#contact"
					className="px-5 py-2 border border-border rounded-full hover:bg-accent hover:text-bg transition"
				>
					Hablemos
				</a>
			</motion.div>
		</section>
	);
};
