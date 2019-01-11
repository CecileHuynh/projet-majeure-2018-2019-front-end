import React from 'react';
import PropTypes from 'prop-types';
import DiscussionMessage from '../DiscussionMessage';
import './index.scss';

const DiscussionMessages = ({
  className,
  contact,
  event,
  messages,
}) => (
  <div className={`DiscussionMessages ${className}`}>
    <div className="event-mentioned">Vous et {contact} participez à l&apos;événement : {event}</div>
    <div className="message-list">
      {messages.sort((a, b) => a.timestamp - b.timestamp)
        .map(({ person, text }) => (
          <DiscussionMessage
            className={contact === person ? 'other' : 'own'}
            text={text}
          />
        ))
      }
    </div>
  </div>
);

DiscussionMessages.propTypes = {
  className: PropTypes.string,
  contact: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

DiscussionMessages.defaultProps = {
  className: '',
  messages: [],
};

export default DiscussionMessages;
