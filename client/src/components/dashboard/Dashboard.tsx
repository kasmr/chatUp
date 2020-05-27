import React from 'react';

interface Props {}

const Dashboard = ({ room }: { room: any }) => {
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
