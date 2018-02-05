import React from 'react';
//import { Route, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../homeContainer'
import ItemView from '../itemViewContainer'
import ViewChart from '../viewChartContainer'
import EditItem from '../editItemContainer'


const App = () => (
  <div>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/itemView" component={ItemView} />
      <Route exact path="/viewChart" component={ViewChart} />
      <Route exact path="/editItem" component={EditItem} />
    </main>
  </div>
)

export default App;

/*
    <header>
      <Link to="/">Home</Link>
      <Link to="/itemView"> ItemView</Link>
      <Link to="/viewChart"> ViewChart</Link>
      <Link to="/editItem"> EditItem</Link>
    </header>
*/
