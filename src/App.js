import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  let menu = ['Home', 'About', 'Contact', 'Services']
  let columns = ['Company', "Careers", "contacts"]
  return (
    <div className="App">

      <Counter/>
     
     
    </div>
  );
}

export default App;
