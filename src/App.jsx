import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import SelectedHome from "./components/selectedTour/SelectedHome"
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import CreateMatch from "./components/selectedTour/CreateMatch";
import GenerateTeam from "./components/selectedTour/GenerateTeam";
import SubmitScores from "./components/selectedTour/SubmitScores";
import ManagePlayers from "./components/selectedTour/ManagePlayers";
import PlayerScores from "./components/selectedTour/PlayerScores";
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
					<Route path="/" element={<Login />}></Route>
					<Route path="/HomePage" element={<HomePage />}></Route>
					<Route path="/selected/:tournamentName" element={<SelectedHome />}>
					  {/* Define nested routes here */}
					  <Route path="createMatch" element={<CreateMatch />} />
					  <Route path="generate" element={<GenerateTeam />} />
					  <Route path="submitScores" element={<SubmitScores />} />
					  <Route path="managePlayers" element={<ManagePlayers />} />
					  <Route path="playerScores" element={<PlayerScores />} />
					</Route>
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