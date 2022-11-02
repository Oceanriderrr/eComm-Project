
import './App.css';
import Header from './components/Header/Header';
import PageTitle from './components/PageTitle/PageTitle';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
        <Header />




        
        <div  className="content">
<main className="main-content">
  <Main />
  </main>
         <Aside /> 
        </div>

        
      

        <Footer />
    </div>
  );
}

export default App;
