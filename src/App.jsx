import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { BaseLayout } from "./components/layout/BaseLayout";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
	return (
		<BaseLayout>
		<Navbar />
			<section id="home" className="min-h-screen flex items-center justify-center">
				<Hero />
			</section>

			<section id="about" className="py-20">
				<About />
			</section>

			<section id="projects" className="py-20">
				<Projects />
			</section>

			<section id="skills" className="py-20">
				<Skills />
			</section>

			<section id="contact" className="py-20">
				<Contact />
			</section>

			<Footer />
		</BaseLayout>
	);
};
