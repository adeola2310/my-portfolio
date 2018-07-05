import React, { Component} from 'react';
import { Tab, Tabs} from 'react-mdl';
import { Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, Grid, Cell} from 'react-mdl';

 class Project extends Component {
     constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if (this.state.activeTab === 0){
         return(
             <Grid>
                 <Cell col={4}>
             <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>My Portfolio</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
         <Button colored>Behance</Button>
         <Button colored>LIve Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                </Cell>
                <Cell col={8}>
             <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>My Login Form</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
         <Button colored>Behance</Button>
         <Button colored>LIve Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</Cell>
                 </Grid>
         )
        }
        else if (this.state.activeTab === 1){
            return (
                <div>
                <h1> this is angular </h1>
                    </div>
            )
        }
       else if (this.state.activeTab === 2){
            return (
                <div>
                <h1> this is VueJs </h1>
                    </div>
            )
        } 
         else if (this.state.activeTab === 3){
            return (
                <div>
                <h1> this is MongoDB </h1>
                    </div>
            )
        } 
    }

    render() {
        return(
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Reacts</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section>
                    {this.toggleCategories()}
                </section>
            </div>  
        );
    }

}
export default Project;