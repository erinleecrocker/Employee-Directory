import logo from './logo.svg';
import './App.css';
import DisplayEmployees from './components/DisplayEmployees/DisplayEmployees';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <DisplayEmployees />
    </div>
  );
}

export default App;
