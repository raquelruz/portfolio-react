import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite, SiFramer, SiGithub } from "react-icons/si";

const skills = [
	{ name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 90, text: "Vanilla JS, lógica, módulos, asincronía" },
	{ name: "React", icon: <FaReact />, color: "#61DAFB", level: 85, text: "Hooks, estados, props, components, routers" },
	{ name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", level: 80, text: "Diseños rápidos, responsive, componentes UI" },
	{ name: "HTML", icon: <FaHtml5 />, color: "#E96228", level: 95, text: "Semántica, accesibilidad, estructura limpia" },
	{ name: "CSS", icon: <FaCss3Alt />, color: "#2862E9", level: 95, text: "Flexbox, Grid, animaciones, responsive" },
	{ name: "Vite", icon: <SiVite />, color: "#A56DFF", level: 80, text: "Configuración, optimización y bundling rápido" },
	{ name: "Framer Motion", icon: <SiFramer />, color: "#E8E8E8", level: 50, text: "Animaciones fluidas y transiciones avanzadas" },
	{ name: "Git", icon: <FaGitAlt />, color: "#F05033", level: 85, text: "Branching, commits, merges y flujo profesional" },
	{ name: "GitHub", icon: <SiGithub />, color: "#E8E8E8", level: 85, text: "Repos, issues, documentación y versiones" },
];

export const Skills = () => {
	return (
		<section id="skills" className="px-6 md:px-20 bg-bg text-text">

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="text-4xl md:text-5xl font-bold font-title mb-14"
			>
				Skills<span className="text-accent">.</span>
			</motion.h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
				{skills.map((skill, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.07 }}
						viewport={{ once: true }}
						className="group p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2"
					>
						<div className="flex items-center gap-4 mb-4">
							<div
								className="text-4xl p-3 rounded-xl"
								style={{
									color: skill.color,
									background: `${skill.color}15`,
									boxShadow: `0 0 20px ${skill.color}20`,
								}}
							>
								{skill.icon}
							</div>

							<div>
								<h3 className="text-lg font-title font-semibold group-hover:text-accent transition-colors">
									{skill.name}
								</h3>
								<p className="text-xs uppercase tracking-wider text-text/60">
									{skill.level >= 90 ? "Avanzado" : skill.level >= 70 ? "Intermedio" : "Principiante"}
								</p>
							</div>
						</div>

						<p className="text-text/70 text-sm mb-4 font-landing">{skill.text}</p>

						<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: `${skill.level}%` }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								className="h-full rounded-full"
								style={{
									background: skill.color,
									boxShadow: `0 0 10px ${skill.color}90`,
								}}
							></motion.div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};
