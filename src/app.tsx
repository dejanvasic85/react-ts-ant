import React from 'react';
import { Button, Typography, Input } from 'antd';

const App = () => {
  return (
    <div>
      <Typography.Title>Hello world</Typography.Title>
      <Button type="primary">This should be styled</Button>
      <Input type="text" value="this is a text" />
    </div>
  );
};

export default App;
