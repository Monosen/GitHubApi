import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Views
import Home from "./views/Home/Home";
import PageRepos from "./views/PageRepos/PageRepos";
import PageFollowers from "./views/PageFollowers/PageFollowers";
import PageError from "./views/PageError/PageError";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/repositories/:code" element={<PageRepos />} />
				<Route path="/followers/:code" element={<PageFollowers />} />
				<Route path="*" element={<PageError />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
