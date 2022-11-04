
import './App.css';
import Aside from './components/Aside/Aside';
import HeaderNav from './components/HeaderNav/HeaderNav'
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Content from './components/Content/Content';
import UtilitiesMenu from './components/UtilitiesMenu/UtilitiesMenu';
function App() {
  return (
    <div className="App">
    <Header />
<HeaderNav />
<Content />
<Aside />
<SearchBar />
<UtilitiesMenu />
  </div>
  );
}

export default App;
