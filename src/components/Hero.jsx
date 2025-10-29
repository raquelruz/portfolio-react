export const Hero = () => {
	return (
		<section id="home">
			<h1>
				Raquel Ruiz
				<span>Full Stack Developer</span> & Designer
			</h1>

			<p>Construyendo experiencias web creativas en Jerez de la Frontera, España.</p>

			{/* 🔗 Botones opcionales */}

			<a
				href="#projects"
				className="px-5 py-2 border border-[color:var(--color-border)] rounded-full hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-bg)] transition"
			>
				Descubre mi trabajo
			</a>
		</section>
	);
};
