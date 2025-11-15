import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
	{
		title: "Bookfix — Biblioteca Web",
		description:
			"Explora libros mediante la API de Google Books. CRUD, favoritos y gestión completa con LocalStorage.",
		tech: ["JavaScript", "HTML", "CSS", "API REST"],
		image: "/projects/bookfix.png",
		link: "https://bookfix.netlify.app/",
		github: "https://github.com/raquelruz/final-proyect-js",
	},
	{
		title: "Woodline Living — E-Commerce",
		description:
			"E-commerce moderno en React + Tailwind con dashboard, pedidos en tiempo real y animaciones con Framer Motion.",
		tech: ["React", "Tailwind", "Axios", "Framer Motion"],
		image: "/projects/woodline.png",
		link: "https://woodlineliving.netlify.app/",
		github: "https://github.com/raquelruz/woodline-project",
	},
	{
		title: "Réplica de Amazon — E-Commerce",
		description:
			"Clon funcional de Amazon con buscador, carrito dinámico y filtros avanzados. Desarrollado en JavaScript. (LINK EN NETLIFY TUMBADO)",
		tech: ["JavaScript", "CSS", "HTML", "Modular JS"],
		image: "/projects/amazon.png",
		link: "",
		github: "https://github.com/javier-ibanez-vizuete/proyecto-parejas-amazon",
	},
];

export const Projects = () => {
	return (
		<section id="projects" className="px-6 md:px-20 py-20 bg-bg text-text relative">

			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-bg blur-[120px] rounded-full"></div>
				<div className="absolute bottom-20 right-10 w-72 h-72 bg-bg blur-[120px] rounded-full"></div>
			</div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-4xl md:text-5xl font-bold font-title mb-14 relative z-10"
			>
				Proyectos destacados<span className="text-accent">.</span>
			</motion.h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 relative z-10">
				{projects.map((project, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: i * 0.1 }}
						viewport={{ once: true }}
						className="group flex flex-col bg-bg border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_20px_-5px_rgba(0,255,204,0.15)] hover:shadow-[0_0_40px_-5px_rgba(0,255,204,0.3)] transition-all duration-500 backdrop-blur-xl"
					>

						{/* IMAGEN GRANDE */}
						<div className="relative h-64 overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
							/>

							{/* Luz en hover */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-tr from-accent via-transparent to-transparent"></div>
						</div>

						{/* CONTENIDO */}
						<div className="p-7 flex flex-col flex-1">

							<h3 className="text-xl font-semibold font-title mb-2 group-hover:text-accent transition-colors">
								{project.title}
							</h3>

							<p className="text-sm text-text/70 mb-4 leading-relaxed font-landing">
								{project.description}
							</p>

							{/* TECNOLOGÍAS */}
							<div className="flex flex-wrap gap-2 mb-6">
								{project.tech.map((tech, j) => (
									<span
										key={j}
										className="px-3 py-1 text-xs rounded-full bg-border border-white/10 backdrop-blur-md text-text/60"
									>
										{tech}
									</span>
								))}
							</div>

							{/* BOTONES */}
							<div className="flex items-center gap-4 mt-auto">
								<a
									href={project.link}
									target="_blank"
									className="px-4 py-2 bg-accent text-bg rounded-full text-sm font-medium flex items-center gap-2 hover:bg-accent/80 transition-all duration-300"
								>
									<FiExternalLink /> Demo
								</a>

								<a
									href={project.github}
									target="_blank"
									className="px-4 py-2 text-sm border border-white/10 rounded-full flex items-center gap-2 hover:text-accent transition-all duration-300"
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
