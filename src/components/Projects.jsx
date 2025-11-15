import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
	{
		title: "Bookfix — Biblioteca Web",
		description:
			"Aplicación web para explorar y gestionar libros mediante la API de Google Books. Incluye CRUD, favoritos y almacenamiento en LocalStorage.",
		tech: ["JavaScript", "HTML", "CSS", "API REST"],
		image: "../assets/images/bookfix.png",
		link: "https://bookfix.netlify.app",
		github: "https://github.com/raquelruz/bookfix",
	},
	{
		title: "Woodline Living — E-Commerce",
		description:
			"E-commerce desarrollado en React + Tailwind con dashboard administrativo, control de pedidos y animaciones fluidas con Framer Motion.",
		tech: ["React", "Tailwind", "Axios", "Framer Motion"],
		image: "../assets/images/woodline.png",
		link: "https://woodline.netlify.app",
		github: "https://github.com/raquelruz/woodline",
	},
	{
		title: "WertitApp — Red Social de Viajes",
		description:
			"Proyecto personal que conecta viajeros mediante calendarios y grupos compartidos. Interfaz creada desde cero con HTML, CSS y JavaScript vanilla.",
		tech: ["JavaScript", "LocalStorage", "Responsive Design"],
		image: "/projects/wertitapp.jpg",
		link: "https://wertitapp.netlify.app",
		github: "https://github.com/raquelruz/wertitapp",
	},
];

export const Projects = () => {
	return (
		<section
			id="projects"
			className="flex flex-col justify-center px-6 md:px-20 bg-bg text-text transition-colors duration-700"
		>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				viewport={{ once: true }}
				className="text-4xl md:text-5xl font-bold font-title mb-14 "
			>
				Proyectos destacados
			</motion.h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-6xl">
				{projects.map((project, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.1 }}
						viewport={{ once: true }}
						className="group bg-card border border-border rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_30px_rgba(0,255,204,0.15)] transition-all duration-500"
					>
						<div className="overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>

						<div className="p-6 flex flex-col justify-between h-full">
							<div>
								<h3 className="text-xl font-semibold mb-3 font-title group-hover:text-accent transition-colors">
									{project.title}
								</h3>

								<p className="text-text/70 text-sm leading-relaxed mb-5 font-landing">
									{project.description}
								</p>

								{/* Tecnologías */}
								<ul className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech, j) => (
										<li
											key={j}
											className="px-3 py-1 text-xs border border-[color:var(--color-border)] rounded-full text-[color:var(--color-text)]/70"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>

							{/* Botones */}
							<div className="flex items-center gap-4 mt-auto">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-[color:var(--color-accent)] text-[color:var(--color-bg)] rounded-full text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-all duration-300"
								>
									<FiExternalLink /> Demo
								</a>

								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 border border-[color:var(--color-border)] rounded-full text-sm font-medium hover:text-[color:var(--color-accent)] transition-all duration-300"
								>
									<FiGithub /> Código
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};
