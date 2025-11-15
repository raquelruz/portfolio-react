import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
	return (
		<footer className="relative mt-32 bg-accent/20 text-text pt-10 pb-4 overflow-hidden border-t border-white/10">

			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: "100%" }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				className="absolute top-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent"
			/>

			<div className="px-6 md:px-20 flex flex-col items-center text-center gap-2">

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-4xl font-title tracking-wider font-bold"
				>Raquel Ruiz
					<span className="text-accent"> *</span>
				</motion.h2>

				<p className="text-text/60 text-sm font-landing">
					Full Stack Developer · Graphic Designer · Creative Builder
				</p>

				{/* LINKS */}
				<motion.ul
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="flex flex-wrap justify-center gap-8 text-sm font-landing mt-4"
				>
					<li><a href="#home" className="hover:text-accent transition">Inicio</a></li>
					<li><a href="#projects" className="hover:text-accent transition">Proyectos</a></li>
					<li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
					<li><a href="#contact" className="hover:text-accent transition">Contacto</a></li>
				</motion.ul>

				{/* ICONOS */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex gap-5 mt-6"
				>
					<a
						href="mailto:raquelruizlopezcepero@gmail.com"
						className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-text/70 hover:text-accent hover:border-accent transition-all group"
					>
						<FiMail className="text-xl group-hover:scale-110 transition" />
					</a>

					<a
						href="https://github.com/raquelruz"
						target="_blank"
						className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-text/70 hover:text-accent hover:border-accent transition-all group"
					>
						<FiGithub className="text-xl group-hover:scale-110 transition" />
					</a>

					<a
						href="https://www.linkedin.com/in/raquel-ruiz-lopez"
						target="_blank"
						className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-text/70 hover:text-accent hover:border-accent transition-all group"
					>
						<FiLinkedin className="text-xl group-hover:scale-110 transition" />
					</a>
				</motion.div>
			</div>

			<div className="text-center text-text/50 text-xs mt-10">
				© {new Date().getFullYear()} Raquel Ruiz — Hecho con ♥ y React.
			</div>
		</footer>
	);
};
