import { FC } from 'react';
import { RecoilRoot } from 'node_modules/recoil';

const Recoil: FC = ({ children }): JSX.Element => (
  <RecoilRoot>
    {children}
  </RecoilRoot>
)

export { Recoil };
