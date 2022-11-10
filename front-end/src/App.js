
import './App.css';



// Import Components
import Aside from './components/Aside/Aside';
import HeaderNav from './components/HeaderNav/HeaderNav'

import Footer from './components/Footer/Footer';

import Pages from './components/Pages/Pages';
// Import Pages

function App() {
  return (
    <div className="App">
    {/* Components that belong to every page */}
 <div class="content"> 

<HeaderNav />
 <Aside /> 
      <div className="pageContent">
 <Pages />
   </div>
 </div>
    <Footer />
  </div>
  );
}


export default App;
