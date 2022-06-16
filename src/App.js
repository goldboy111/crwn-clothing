import './App.css';
import HomePage from './../src/pages/homepage.component.jsx';
import { Route, Router, Routes, Link } from 'react-router-dom';


const HatsPage = (props)=>{
  console.log(props);
return(<div>
  <h1>Hats Page</h1>
</div>
)
  }

const DetailsPage = props=>(
    
    
   
    
    <div>
      <h1>Details Page</h1>
      
    </div>
    
  )

function App() {
  return (
    <div >
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      
    </div>
  );
}

export default App;
