import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
             <Cell Col={6}>
                <img src="https://mjscanada.com/wp-content/themes/mjscanada-theme/images/avatar-female-2.png"
                       alt="avatar"
                       className="avatar-img"
                       style={{height: '250px'}}
                       />
                       <h2> Adekoyejo Adeola </h2>
                       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... </p>
               </Cell>
               
               <Cell Col={6}> 
                   <h1> Contact Me </h1>
                   <hr/>
                   <List>
  <ListItem>
    <ListItemContent icon="person">Bryan Cranston</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person">Aaron Paul</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
  </ListItem>
</List>

               </Cell>
               </Grid>
                </div>
        );
    }

}
export default Contact;