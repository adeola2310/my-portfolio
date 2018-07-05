import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="MY PORTFOLIO" scroll>
            <Navigation>
               <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
