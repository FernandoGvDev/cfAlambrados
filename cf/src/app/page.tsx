import Hero from "@/components/home/Hero"
import AboutCF from "@/components/home/AboutCF";
import Services from "@/components/home/Services";
import Galeria from "@/components/home/Galeria/Galeria";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="bg-white">
			<Hero />
			<AboutCF />
			<Services />
			<Galeria />
			<CTA />
			<Footer />
		</div>
	);
}
