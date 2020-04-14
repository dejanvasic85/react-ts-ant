import React from 'react';

import styles from './StyleProvider.less';

interface Props {
  children: React.ReactElement;
}

const StyleProvider = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};

export default StyleProvider;
