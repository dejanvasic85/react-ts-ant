import React, { useState } from 'react';
import { Button, Result, Input } from 'antd';
import { SmileOutlined, StopOutlined } from '@ant-design/icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './TodoList.less';

const TodoList = () => {
  const [showInput, setShowInput] = useState(false);

  console.log('styles', styles);
  return (
    <div>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={
          <Button type="primary" onClick={() => setShowInput(true)}>
            Add Task
          </Button>
        }
      />

      <CSSTransition
        unmountOnExit={true}
        in={showInput}
        classNames={{
          enter: styles.inputEnter,
          enterActive: styles.inputEnterActive,
          exit: styles.inputExit,
          exitActive: styles.inputExitActive,
        }}
        timeout={1000}
      >
        <div>
          <Input placeholder="Take rubbish out..." />
          <Button onClick={() => setShowInput(false)}>
            <StopOutlined />
          </Button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default TodoList;
