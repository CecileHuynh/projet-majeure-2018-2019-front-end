import React from 'react';
import PropTypes from 'prop-types';
import DiscussionBox from '../DiscussionBox';
import './index.scss';

const DiscussionList = ({ className, list }) => (
  <div className={`DiscussionList ${className}`}>
    {list.map(({
      active,
      lastMessage,
      person,
      time,
    }) => (
      <DiscussionBox
        active={active}
        key={person}
        person={person}
        time={time}
        lastMessage={lastMessage}
      />
    ))}
  </div>
);

DiscussionList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.shape(PropTypes.arrayOf({
    person: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })),
};

DiscussionList.defaultProps = {
  className: '',
  list: [],
};

export default DiscussionList;
