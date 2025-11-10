import { IoMdTrendingUp, IoMdSettings } from "react-icons/io";
import { motion } from "framer-motion";

export const About = () => {
	return (
		<section
			id="about"
			className="px-6 md:px-20 flex flex-col items-start bg-bg text-text transition-colors duration-700"
		>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
				className="text-4xl md:text-5xl font-bold font-title mb-10"
			>
				Sobre mí
			</motion.h1>

			{/* 💬 Introducción */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.8 }}
				viewport={{ once: true }}
				className="max-w-full text-text/80 text-lg leading-relaxed font-landing mb-12 space-y-4"
			>
				<p>
					Soy <span className="text-accent font-semibold">Raquel Ruiz</span>,
					desarrolladora <strong>Full Stack</strong> y diseñadora gráfica apasionada por crear experiencias
					digitales donde el diseño y la tecnología se equilibran para lograr un resultado funcional, visual y
					memorable.
				</p>

				<p>
					Mi objetivo es construir productos que transmitan <strong>identidad</strong>,{" "}
					<strong>claridad</strong> y<strong> emoción</strong>, combinando un enfoque creativo con una
					mentalidad analítica.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.8 }}
				viewport={{ once: true }}
				className="max-w-full mb-12"
			>
				<div className="flex items-center gap-3 mb-4">
					<IoMdTrendingUp className="text-2xl" />
					<h3 className="text-2xl font-semibold font-title">De lo visual a lo funcional</h3>
				</div>

				<p className="text-text/75 text-lg leading-relaxed font-landing">
					Mi recorrido comenzó en el mundo del <strong>diseño gráfico</strong>, donde aprendí a comunicar
					visualmente ideas con propósito. Esa base creativa me enseñó que cada detalle importa: desde la
					tipografía hasta el flujo de navegación. Hoy aplico esa sensibilidad estética al desarrollo web,
					creando interfaces limpias, accesibles y con alma.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				viewport={{ once: true }}
				className="max-w-full mb-16"
			>
				<div className="flex items-center gap-3 mb-4">
					<IoMdSettings className="text-2xl" />
					<h3 className="text-2xl font-semibold font-title">Tecnologías y metodologías</h3>
				</div>

				<p className="text-text/75 text-lg leading-relaxed font-landing">
					Trabajo con herramientas modernas como{" "}
					<span className="font-bold text-accent">React</span>,{" "}
					<span className="font-bold text-accent">JavaScript</span>,{" "}
					<span className="font-bold text-accent">Tailwind CSS</span> y{" "}
					<span className="font-bold text-accent">Vite</span>. Me gusta escribir un
					código <strong>limpio</strong>, <strong>escalable</strong> y bien documentado. Además, disfruto
					trabajando con <strong>Framer Motion</strong> para añadir dinamismo con transiciones elegantes que
					elevan la experiencia visual sin comprometer el rendimiento.
				</p>
			</motion.div>

			<motion.a
				href="#projects"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 300 }}
				className="px-8 py-3 border border-border rounded-full font-landing text-text hover:bg-accent hover:text-bg transition-all duration-300 shadow-sm"
			>
				Ver mis proyectos →
			</motion.a>
		</section>
	);
};
