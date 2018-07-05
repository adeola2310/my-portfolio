import React from 'react';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';
import { Switch, Route} from 'react-router-dom';


const Main = () => (
<Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/project" component={Project} />
    <Route path="/resume" component={Resume} />
    <Route  path="/aboutme" component={Aboutme} />
    <Route  path="/contact" component={Contact} />
   </Switch>
)

export default Main;