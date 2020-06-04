import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

interface Props {
  id: number;
  description: string;
  onDelete: (id: number) => void;
}

import styles from './TodoItem.less';

const Todo = ({ id, description, onDelete }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.description}>{description}</div>
      <div className={styles.delete}>
        <DeleteOutlined onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default Todo;
