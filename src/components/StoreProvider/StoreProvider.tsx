import { WrapRootElementBrowserArgs } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../../store';

const StoreProvider: FunctionComponent<WrapRootElementBrowserArgs> = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);

export default StoreProvider;
