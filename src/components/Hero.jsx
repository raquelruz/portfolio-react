import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const Hero = () => {
	return (
		<section
			id="home"
			className="pt-28 pl-20 flex flex-row items-center justify-center w-full min-h-screen text-center bg-bg text-text"
		>
			<div className="absolute top-0 left-0 w-[450px] h-[450px] bg-accent/20 blur-[120px] rounded-full"></div>
			<div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent/10 blur-[120px] rounded-full"></div>

			<div className="z-10 flex flex-col items-start text-left  md:w-1/2">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-7xl font-bold font-title leading-tight"
				>
					Hola, soy <br />
					<span className="text-accent">Raquel Ruiz</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="mt-5 text-text/70 text-lg md:text-xl font-landing"
				>
					Full Stack Developer & Diseñadora Gráfica.
					<br />
					Construyendo experiencias digitales creativas desde Jerez de la Frontera.
				</motion.p>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="flex gap-5 mt-10"
				>
					<a
						href="#projects"
						className="px-7 py-3 rounded-full bg-accent text-bg font-semibold flex items-center gap-2 hover:bg-accent/80 transition-all duration-300"
					>
						Mis proyectos <FiArrowRight className="text-sm" />
					</a>

					<a
						href="#contact"
						className="px-7 py-3 rounded-full border border-border text-text font-semibold hover:bg-white/10 transition-all duration-300"
					>
						Contactar
					</a>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="hidden md:flex justify-center items-center w-1/2"
			>
				<div className="w-[420px] h-[420px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl flex items-center justify-center">
					<img
						src="/profile/me.png"
						alt="Raquel Ruiz"
						className="w-full h-full object-cover rounded-3xl opacity-90"
					/>
				</div>
			</motion.div>
		</section>
	);
};
