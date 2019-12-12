import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HAts Page</h1>
      <Link to={`${props.match.url}/12`}> hat id : 12</Link>
    </div>
  )
}

// const JacketsPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push('/jackets')}>History</button>
//       <h1>jackets mOfos</h1>
//     </div>
//   )
// }
// const SnikersPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>snikers mOfos</h1>
//     </div>
//   )
// }
// const MensPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>mens collection mOfos</h1>
//     </div>
//   )
// }

// const WomensPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>womens collection mOfos : {props.match.params.productId}</h1>
//     </div>
//   )
// }


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        {/* <Route path='/jackets' component={JacketsPage} />
        <Route path='/snikers' component={SnikersPage} />
        <Route path='/mens' component={MensPage} />
        <Route exact path='/womens' component={WomensPage} />
        <Route path='/womens/:productId' component={WomensPage} /> */}
      </Switch>

    </div>
  );
}

export default App;
