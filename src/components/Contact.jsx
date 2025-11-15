import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { useState } from "react";

export const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const subject = encodeURIComponent(`Nuevo mensaje de ${form.name}`);
		const body = encodeURIComponent(
			`Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
		);

		window.location.href = `mailto:raquelruizlopezcepero@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<section
			id="contact"
			className="px-6 md:px-20 py-20 bg-bg text-text transition-colors duration-700"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="mb-16"
			>
				<h1 className="text-4xl md:text-5xl font-bold font-title">
					Contacto<span className="text-accent">.</span>
				</h1>
				<p className="text-text/70 font-landing mx-auto">
					¿Tienes un proyecto en mente o quieres colaborar conmigo?
					Estoy disponible para trabajar en nuevos retos.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<motion.form
					onSubmit={handleSubmit}
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-lg"
				>
					<div className="flex flex-col gap-6">
						<div>
							<label className="text-sm font-semibold text-text/80">Nombre</label>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-text placeholder-text/40 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
								placeholder="Escribe tu nombre"
								required
							/>
						</div>

						<div>
							<label className="text-sm font-semibold text-text/80">Email</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-text placeholder-text/40 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
								placeholder="Escribe tu email"
								required
							/>
						</div>

						<div>
							<label className="text-sm font-semibold text-text/80">Mensaje</label>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								rows="5"
								className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-text placeholder-text/40 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
								placeholder="Cuéntame sobre tu proyecto o idea..."
								required
							></textarea>
						</div>

						<motion.button
							type="submit"
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="mt-4 w-full flex items-center justify-center gap-2 bg-accent text-bg font-semibold py-3 rounded-xl shadow-md hover:bg-accent/80 transition-all"
						>
							<FiSend />
							Enviar mensaje
						</motion.button>
					</div>
				</motion.form>

				{/* RRSS */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex flex-col justify-center gap-8"
				>
					<a
						href="mailto:raquelruizlopezcepero@gmail.com"
						className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:border-accent hover:shadow-accent/20 transition-all"
					>
						<div className="text-3xl text-accent">
							<FiMail />
						</div>
						<div>
							<p className="font-title text-lg group-hover:text-accent transition">
								Correo electrónico
							</p>
							<p className="text-text/60 text-sm">raquelruizlopezcepero@gmail.com</p>
						</div>
					</a>

					<a
						href="https://github.com/raquelruz"
						target="_blank"
						className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:border-accent hover:shadow-accent/20 transition-all"
					>
						<div className="text-3xl text-accent">
							<FiGithub />
						</div>
						<div>
							<p className="font-title text-lg group-hover:text-accent transition">
								GitHub
							</p>
							<p className="text-text/60 text-sm">github.com/raquelruz</p>
						</div>
					</a>

					<a
						href="https://www.linkedin.com/in/raquelruz"
						target="_blank"
						className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:border-accent hover:shadow-accent/20 transition-all"
					>
						<div className="text-3xl text-accent">
							<FiLinkedin />
						</div>
						<div>
							<p className="font-title text-lg group-hover:text-accent transition">
								LinkedIn
							</p>
							<p className="text-text/60 text-sm">@raquelruz</p>
						</div>
					</a>
				</motion.div>
			</div>
		</section>
	);
};
