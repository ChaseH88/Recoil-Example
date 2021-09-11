import React, { FC } from 'react';

// Styles
import { LayoutStyle } from './styled';

const Layout: FC = ({ children }): JSX.Element => (
  <div id='template'>
    <LayoutStyle>
      {children}
    </LayoutStyle>
  </div>
)

export { Layout }
