import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return (
		<>
			<Navbar />
			<Hero />
			<section className="cards-list">{cards}</section>
		</>
	);
}

export default App;
