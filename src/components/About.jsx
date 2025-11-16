import { motion } from "framer-motion";

export const About = () => {
	return (
		<section id="about" className="relative px-6 md:px-24 py-32 bg-bg text-text overflow-hidden">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute top-10 left-20 w-72 h-72 bg-accent/20 blur-[140px] rounded-full" />
				<div className="absolute bottom-10 right-20 w-60 h-60 bg-accent/10 blur-[120px] rounded-full" />
			</div>

			<div className="relative grid lg:grid-cols-2 gap-20 items-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<h1 className="text-4xl md:text-5xl font-title font-bold mb-6 leading-tight">
						Sobre mí<span className="text-accent">.</span>
					</h1>

					<p className="text-text/80 text-lg font-landing leading-relaxed mb-6">
						Soy <span className="text-accent font-semibold">Raquel Ruiz</span>, una desarrolladora web
						apasionada por unir <strong>diseño</strong> y <strong>tecnología</strong> para crear
						experiencias digitales con intención, claridad y cariño.
					</p>

					<p className="text-text/70 text-base font-landing leading-relaxed mb-4">
						Vengo del mundo del diseño gráfico, así que para mí los detalles importan: tipografía, espacios,
						ritmo visual. Pero también disfruto de la lógica, de construir estructuras limpias, de organizar
						código que tenga sentido y sea fácil de mantener.
					</p>

					<p className="text-text/70 text-base font-landing leading-relaxed">
						Me motiva crear productos que se sientan profesionales, útiles y cuidados. Si tuviera que
						resumir mi estilo:{" "}
						<span className="text-accent font-semibold">diseño con intención, desarrollo con orden.</span>
					</p>

					<div className="flex flex-wrap gap-4 mt-10">
						<a
							href="#projects"
							className="px-7 py-3 rounded-full bg-accent text-bg font-landing font-semibold text-sm md:text-base hover:bg-accent/80 transition-all"
						>
							Ver proyectos
						</a>

						<a
							href="#contact"
							className="px-7 py-3 rounded-full border border-border text-text/80 font-landing text-sm md:text-base hover:border-accent hover:text-accent transition-all"
						>
							Colaboremos
						</a>
					</div>
				</motion.div>

				{/* CARD */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="relative"
				>
					<div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_-10px_rgba(0,255,204,0.15)] p-8">
						<div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto border border-white/10 shadow-md">
							<img
								src="/profile/me.png"
								alt="Foto de Raquel Ruiz"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="text-center mt-5">
							<h3 className="text-xl font-title font-semibold">Raquel Ruiz</h3>
							<p className="text-sm text-text/60 font-landing">
								Full Stack Developer & Diseñadora gráfica
							</p>
						</div>

						<hr className="my-6 border-border" />

						<div className="flex flex-wrap gap-3 justify-center text-xs font-landing">
							<span className="px-4 py-1.5 rounded-full bg-bg/30 border border-border text-text/70">
								React & JavaScript
							</span>
							<span className="px-4 py-1.5 rounded-full bg-bg/30 border border-border text-text/70">
								UI/UX & Diseño
							</span>
							<span className="px-4 py-1.5 rounded-full bg-bg/30 border border-border text-text/70">
								Código limpio
							</span>
						</div>

						<p className="text-center mt-6 text-text/70 text-sm font-landing italic">
							"La magia ocurre cuando el diseño y el código trabajan juntos para resolver un problema real."
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
