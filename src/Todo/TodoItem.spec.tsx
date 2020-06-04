import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DeleteOutlined } from '@ant-design/icons';

import TodoItem from './TodoItem';
import styles from './TodoItem.less';

describe('TodoItem', () => {
  let wrapper: ShallowWrapper;

  const defaultProps: any = {
    id: 1,
    description: 'Watching too much Netflix',
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<TodoItem {...defaultProps} />);
  });

  it('should return div with item class', () => {
    expect(wrapper.find(`.${styles.item}`)).toHaveLength(1);
  });

  it('should return div with description class', () => {
    expect(wrapper.find(`.${styles.description}`)).toHaveLength(1);
  });

  it('should return div with delete class', () => {
    expect(wrapper.find(`.${styles.delete}`)).toHaveLength(1);
  });

  it('should render the description text', () => {
    expect(wrapper.find(`.${styles.description}`).text()).toEqual(defaultProps.description);
  });

  it('should call the onDelete callback when clicking the delete icon', () => {
    wrapper.find(DeleteOutlined).simulate('click');
    expect(defaultProps.onDelete).toHaveBeenCalledWith(defaultProps.id);
  });
});
