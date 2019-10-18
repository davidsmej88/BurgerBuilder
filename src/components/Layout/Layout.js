import React, {Fragment} from 'react';
import styles from './Layout.css';

const Layout = ({children}) => (
    <Fragment>
        <div>rest of layout</div>
        <div>
            {children}
        </div>
    </Fragment>
);

export default Layout;
