import React, { Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render() {
        return(
           <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                       <img src="https://mjscanada.com/wp-content/themes/mjscanada-theme/images/avatar-female-2.png"
                       alt="avatar"
                       className="avatar-img"
                       />
                       <div className="banner-text">
                           <h1> Welcome to my personal Webbie </h1>
                           <hr />
                           <p> HTML/CSS | Bootstrap| |Javascript| |UI/UX Designs| </p>
                           </div>
                           <div className="social-links">
                               <a href="/about" target="_blank">
                                <i class="fa fa-google-plus-square" aria-hidden="true" />
                                </a>
                               <a href="/about" target="_blank">
                                <i class="fa fa-google-plus-square" aria-hidden="true" />
                                </a>
                               </div>
                       </Cell>
                </Grid>
          </div>
        );
    }

}
export default Landing;
