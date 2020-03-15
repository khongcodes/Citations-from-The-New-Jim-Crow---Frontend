import React from 'react';

import layoutStyles from '../../styles/Layout.module.scss'

const Layout = ({children}) => (
  <div className={layoutStyles.test}>
    {children}
  </div>
)

export default Layout