import React from 'react';
import { Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const TodoList = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary">Add Task</Button>}
    />
  );
};

export default TodoList;
