import { IoMdTrendingUp, IoMdSettings } from "react-icons/io";
import { motion } from "framer-motion";

export const About = () => {
	return (
		<section id="about" className="relative px-6 md:px-20 py-20 bg-bg text-text overflow-hidden">
			<div className="absolute top-0 right-0 w-[350px] h-[350px] bg-accent/20 blur-[120px] rounded-full"></div>
			<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[120px] rounded-full"></div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="text-5xl md:text-6xl font-bold font-title mb-16"
			>
				Sobre mí<span className="text-accent">.</span>
			</motion.h1>

			<div className="grid md:grid-cols-2 gap-14 items-center">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-lg border border-white/10 space-y-6"
				>
					<p className="text-lg text-text/80 leading-relaxed font-landing">
						Soy <span className="text-accent font-semibold">Raquel Ruiz</span>, desarrolladora{" "}
						<strong>Full Stack</strong> y <strong>diseñadora gráfica</strong> apasionada por crear
						experiencias digitales donde el diseño y la tecnología se equilibran para lograr un resultado
						funcional, visual y memorable.
					</p>

					<p className="text-lg text-text/80 leading-relaxed font-landing">
						{" "}
						Mi objetivo es construir productos que transmitan <strong>identidad</strong>,{" "}
						<strong>claridad</strong> y<strong> emoción</strong>, combinando un enfoque creativo con una
						mentalidad analítica.{" "}
					</p>
				</motion.div>

				<div className="space-y-10">
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
					>
						<div className="p-3 bg-accent/20 text-accent rounded-xl text-3xl">
							<IoMdTrendingUp />
						</div>

						<div>
							<h3 className="text-xl font-semibold font-title mb-2">De lo visual a lo funcional</h3>
							<p className="text-text/75 text-lg leading-relaxed font-landing">
								Mi recorrido comenzó en el mundo del <strong>diseño gráfico</strong>, donde aprendí a
								comunicar visualmente ideas con propósito. Esa base creativa me enseñó que cada detalle
								importa: desde la tipografía hasta el flujo de navegación. Hoy aplico esa sensibilidad
								estética al desarrollo web, creando interfaces limpias, accesibles y con alma.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1, duration: 0.8 }}
						viewport={{ once: true }}
						className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
					>
						<div className="p-3 bg-accent/20 text-accent rounded-xl text-3xl">
							<IoMdSettings />
						</div>

						<div>
							<h3 className="text-xl font-semibold font-title mb-2">Tecnologías y metodologías</h3>
							<p className="text-text/75 text-lg leading-relaxed font-landing">
								Trabajo con herramientas como
								<span className="font-semibold text-accent"> React</span>,
								<span className="font-semibold text-accent"> JavaScript</span>,
								<span className="font-semibold text-accent"> Tailwind CSS</span> y
								<span className="font-semibold text-accent"> Vite</span>. Me gusta escribir un código
								<strong> limpio</strong>, <strong>escalable</strong> y bien documentado. 
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.a
				href="#projects"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 260 }}
				className="mt-16 inline-block px-10 py-4 rounded-full border border-accent text-accent font-landing text-lg hover:bg-accent hover:text-bg transition-all duration-300 shadow-md"
			>
				Ver mis proyectos →
			</motion.a>
		</section>
	);
};
