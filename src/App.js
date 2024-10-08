import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <switch>
            <Route exact path="/" component={Dashboard}/> 
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/SignIn" component={SignIn} />  
            <Route path="/SignUp" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </switch>
          </div>
    </BrowserRouter>
  );
}

export default App;
