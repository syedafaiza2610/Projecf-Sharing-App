import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // If you're using React Router
import { Col, Row } from 'antd';
import img from "../images/project.png"

const { Header, Content } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/addproject">Add Project</Link></Menu.Item>
        </Menu>
      </Header>
      <Row>
        <Content className='cont'>

       <Col span={15}>  <h1>Welcome to Project Sharing App!</h1>
    
        <h2>Start sharing your projects with others.</h2> </Col>
        </Content>
        <Col span={9}><img src={img} alt="" /></Col>




        {/* <p>Start sharing your projects with others.</p> */}


      </Row>
    </Layout>
  );
};

export default HomePage;
