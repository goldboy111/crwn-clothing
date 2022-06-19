import './App.css';
import HomePage from './../src/pages/homepage.component.jsx';
import { Route, Router, Routes, Link, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
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
      <Header />
      <Switch>  
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
