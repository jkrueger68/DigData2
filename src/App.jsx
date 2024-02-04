import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import SelectedHome from "./components/selectedTour/SelectedHome";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import CreateMatch from "./components/selectedTour/CreateMatch";
import GenerateTeam from "./components/selectedTour/GenerateTeam";
import SubmitScores from "./components/selectedTour/SubmitScores";
import ManagePlayers from "./components/selectedTour/ManagePlayers";
import PlayerScores from "./components/selectedTour/PlayerScores";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TournamentProvider } from "./components/TournamentContext";

function App() {
	return (
		<div className="App container-fluid">
			<header className="App">
				<NavBar />
			</header>
			<div className="app-bg w-100">
				<Container>
					<Router>
						<TournamentProvider>
							<div className="row">
								<div className="col-2 d-none d-xxl-block empty" />
								<div className="col my-4">
									<Routes>
										<Route path="/" element={<Login />} />
										<Route path="/HomePage" element={<HomePage />} />
										<Route path="/selected/:tournamentName" element={<SelectedHome />} />
										<Route path="/selected/:tournamentName/managePlayers" element={<ManagePlayers />} />
										<Route path="/selected/:tournamentName/createMatch" element={<CreateMatch />} />
										<Route path="generate" element={<GenerateTeam />} />
										<Route path="submitScores" element={<SubmitScores />} />
										<Route path="playerScores" element={<PlayerScores />} />
									</Routes>
								</div>
								<div className="col-2 d-none d-xxl-block empty" />
							</div>
						</TournamentProvider>
					</Router>
				</Container>
			</div>
		</div>
	);
}

export default App;
