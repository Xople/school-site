import './App.css';
import 'antd/dist/antd.css';
import './style/main.scss';

import Container from './components/include/Container';
import {Layout, Menu, Row, Col} from 'antd';

const {Header,Content} =  Layout; 

function App() {
  return (
    <div className="App">
      <Header className="box-shadow-1" style={{ background: '#fff' }}>
        <Row justify="end">
          <Menu mode="horizontal" style={{ userSelect: 'none' }}>
            <Menu.Item key="2">Menu 1</Menu.Item>
            <Menu.Item key="3">Menu 1</Menu.Item>
            <Menu.Item key="4">Menu 1</Menu.Item>
          </Menu>
        </Row>
      </Header>

      <Container>
        <Content>
          <Row gutter={16} justify="space-between">
            <Col span={12}>
              <h1>Hello World</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque laborum aperiam sint nemo est dolorum iure perspiciatis ex adipisci.</p>
            </Col>
            <Col span={12}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci corrupti maxime at tempore omnis quia beatae deleniti fugit architecto.</p>
            </Col>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
