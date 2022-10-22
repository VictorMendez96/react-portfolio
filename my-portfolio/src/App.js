import logo from './logo.svg';
import './App.css';
import Navigation from './components/Header'
import ProjectCard from './components/Project';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ProjectCard/>
    </div>
  );
}

export default App;
