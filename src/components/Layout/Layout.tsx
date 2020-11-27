import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import GlobalStyles from '../GlobalStyles/GlobalStyles';

import 'sanitize.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

type LayoutProps = PropTypes.InferProps<typeof propTypes>;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
);

Layout.propTypes = propTypes;

export default Layout;
