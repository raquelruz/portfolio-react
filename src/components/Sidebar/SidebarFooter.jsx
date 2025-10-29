import { Github, Linkedin, Mail } from "lucide-react";

export const SidebarFooter = ({ isDark, toggleTheme }) => {
	return (
		<div className="flex flex-col gap-4 mt-10">
			<button
				onClick={toggleTheme}
				className="border border-border px-3 py-2 rounded-full hover:bg-accent/10 transition"
			>
				{isDark ? "☀️ Claro" : "🌙 Oscuro"}
			</button>

			<div className="flex gap-4 text-text/80">
				<a href="https://github.com/raquelruz" target="_blank" rel="noreferrer">
					<Github className="w-5 h-5 hover:text-accent transition" />
				</a>
				<a href="https://linkedin.com/in/raquelruz" target="_blank" rel="noreferrer">
					<Linkedin className="w-5 h-5 hover:text-accent transition" />
				</a>
				<a href="mailto:raquelruizlopezcepero@gmail.com">
					<Mail className="w-5 h-5 hover:text-accent transition" />
				</a>
			</div>
		</div>
	);
}
