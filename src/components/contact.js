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
                       <p> You can contact me or check me out on the following social media...</p>
               </Cell>

               <Cell Col={6}>
                   <h1> Contact Me </h1>
                   <hr/>
                   <List>
  <ListItem>
    <ListItemContent icon="instagram"></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person"></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person"></ListItemContent>
  </ListItem>
</List>

               </Cell>
               </Grid>
                </div>
        );
    }

}
export default Contact;
