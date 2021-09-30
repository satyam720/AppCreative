import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from './components/Topbar/Topbar.component';
import Intro from './Pages/Introduction/Introduction';
import Details from './Pages/Details/Details';
import Advantages from './Pages/Advantages/advantages';
import UserExperience from './Pages/userExperience/UserExperience';

function App() {
  return (
    <>
    
    <div className="App">
      <Topbar />
     <Intro />
     <Details />
     <Advantages />
     <UserExperience />
    </div>
    </>
  );
}

export default App;
