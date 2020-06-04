import React from 'react';
import { Layout, Typography } from 'antd';

import styles from './App.less';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className={styles.heading}>To Do</Header>
      <Content>
        <div className={styles.container}>
          <div className={styles.content}>
            <Typography.Title level={4}>What is on for today?</Typography.Title>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
