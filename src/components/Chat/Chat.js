import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import PropTypes from 'prop-types';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://team13server.herokuapp.com/';

  useEffect(() => {
    const {
      name: inputName,
      room: inputRoom,
    } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(inputRoom);
    setName(inputName);

    socket.emit(
      'join',
      { name: inputName, room: inputRoom },
      error => {
        if (error) {
          console.error();
        }
      }
    );
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', msg => {
      // eslint-disable-next-line no-shadow
      setMessages(messages => [...messages, msg]);
    });

    socket.on('roomData', ({ users: roomUsers }) => {
      setUsers(roomUsers);
    });
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () =>
        setMessage('')
      );
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

Chat.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Chat;
