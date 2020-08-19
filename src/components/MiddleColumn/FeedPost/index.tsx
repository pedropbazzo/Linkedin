import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://images.squarespace-cdn.com/content/52ca3b73e4b04a45ef2c5cb6/1551884875985-5BN4PKBTY4Y4I23CVWG0/AWS_blog_01.PNG?content-type=image%2Fpng" alt="Amazon" />
          <Column>
            <h3>Amazon Web Services (AWS)</h3>
            <h4>Tecnologia da informação e serviços</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://i.ytimg.com/vi/AmTfE_R3g-U/maxresdefault.jpg"
          alt=""
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
