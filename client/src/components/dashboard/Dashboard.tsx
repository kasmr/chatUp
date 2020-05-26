import React from 'react';
import { Tstate } from '../Chat';

interface Props {}

const Dashboard = ({ room }: { room: Tstate }) => {
  return (
    <div>
      <div>
        <img src='onlineIcon' alt='' />
        <h3>{room}</h3>
      </div>
      <div>
        <a href='/'>
          <img src='closeIcon' alt='' />
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
