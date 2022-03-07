import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({selected, isHome, hasNotifications, mentions}) => {

  const Logo: string = require("../Assets/logo.svg").default;

  return (
      <Button 
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
      >
          {isHome && <img src={Logo} alt="Rocketseat"/>}
      </Button>
  )
}

export default ServerButton;