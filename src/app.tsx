import React from 'react';
import { Button, Typography, Input, Layout } from 'antd';

import styles from './App.less';

const App = () => {
  return (
    <div className={styles.container}>
      <Typography.Title>Hello world</Typography.Title>
      <Button type="primary">This should be styled</Button>
      <Input type="text" value="this is a text" />
    </div>
  );
};

export default App;
