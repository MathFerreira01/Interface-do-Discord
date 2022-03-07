import React from 'react';

import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
          <Category>
              <span>Canais de texto</span>
              <AddCategoryIcon/>
          </Category>

          <ChannelButton channelName='chat-livre' />
          <ChannelButton channelName='Trabalho' />
          <ChannelButton channelName='csgo' />
          <ChannelButton channelName='Lol' />
          <ChannelButton channelName='Cod' />
      </Container>
  )
}

export default ChannelList;