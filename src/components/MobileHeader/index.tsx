import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars0.githubusercontent.com/u/32115702?s=460&u=18b6f3c1f7fb02331ad007fd21a6fdd1c2105790&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
