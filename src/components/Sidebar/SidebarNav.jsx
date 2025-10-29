import { useEffect, useState } from "react";

export const SidebarNav = ({ onLinkClick }) => {
	const [active, setActive] = useState("#home");
	const links = [
		{ href: "#home", label: "Inicio" },
		{ href: "#about", label: "Sobre mí" },
		{ href: "#projects", label: "Proyectos" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contacto" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const sections = links.map((l) => document.querySelector(l.href));
			const current = sections.findLast((section) => section?.getBoundingClientRect().top <= 80);
			if (current) setActive(`#${current.id}`);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = (event, href) => {
		event.preventDefault();
		const section = document.querySelector(href);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			onLinkClick?.();
		}
	};

	return (
		<nav className="mt-12 flex flex-col gap-4 font-medium font-title text-4xl">
			{links.map(({ href, label }) => (
				<a
					key={href}
					href={href}
					onClick={(event) => handleScroll(event, href)}
					className={`relative group transition ${
						active === href ? "text-accent" : "text-accent/80 hover:text-accent-hover"
					}`}
				>
					{label}
					<span
						className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${
							active === href ? "w-full" : "w-0 group-hover:w-full"
						}`}
					></span>
				</a>
			))}
		</nav>
	);
}
