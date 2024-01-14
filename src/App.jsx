import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import SelectedHome from "./components/selectedTour/SelectedHome"
import CreateMatch from "./components/selectedTour/CreateMatch";
import GenerateTeam from "./components/selectedTour/GenerateTeam";
import SubmitScores from "./components/selectedTour/SubmitScores";
import ManagePlayers from "./components/selectedTour/ManagePlayers";
import PlayerScores from "./components/selectedTour/PlayerScores";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App container-fluid">
			<header className="App">
				<NavBar />
			</header>
			<div className="app-bg w-100">
				<Container>
					<Router>
          <div className="row">
						<div className="col-2 d-none d-xxl-block empty" />
						<div className="col my-4">
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/selected/:tournamentName" element={<SelectedHome />}></Route>
							<Route path="/selected/createMatch" element={<CreateMatch />}></Route>
							<Route path="/selected/generate" element={<GenerateTeam />}></Route>
							<Route path="/submitScores" element={<SubmitScores />}></Route>
							<Route path="/managePlayers/:tournamentName" element={<ManagePlayers />}></Route>
							<Route path="/playerScores" element={<PlayerScores />}></Route>
							{/* <Route path="/players" element={<Players />}></Route> */}
						</Routes>
            </div>
						<div className="col-2 d-none d-xxl-block empty" />
					</div>						
					</Router>
				</Container>
			</div>
		</div>
	);
}

export default App;
