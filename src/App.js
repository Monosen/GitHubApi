import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Views
import Home from "./views/Home/Home";
import PageRepos from "./views/PageRepos/PageRepos";
import PageFollowers from "./views/PageFollowers/PageFollowers";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/repositories/:code" element={<PageRepos />} />
				<Route path="/followers/:code" element={<PageFollowers />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
