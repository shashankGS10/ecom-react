import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route, Switch, Link } from 'react-router-dom';
import ShopComponent from './pages/shop/shop-component.jsx';


const ShopComp = (props) => {
  console.log(props);
  return (
    <div>
      SHOP PAGE
  <button onClick="download('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'demoVideo.mp4', 'video')" ></div>Click me</button>
    </div >
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopComponent} />
        <Route path='/shop1' component={ShopComp} />
      </Switch>

    </div>
  );
}

export default App;
