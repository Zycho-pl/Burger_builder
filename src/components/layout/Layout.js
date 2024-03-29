import React from 'react';
import Aux from '../../hoc/Aux';
// import classes from './Layout.css';
import styles from './Layout.module.css';

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
