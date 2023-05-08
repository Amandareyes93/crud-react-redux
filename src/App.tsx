import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<main>
			<h1>Nuestro primer proyecto con Redux</h1>
			<ListOfUsers />
			<CreateNewUser />
		</main>
	);
}

export default App;
