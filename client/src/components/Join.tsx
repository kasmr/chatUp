import React, { useState } from 'react';

interface Props {}

const Join = (props: Props) => {
  const [state, setState] = useState<object>({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='inner-container'>
        <div>
          <input placeholder='' type='text' onChange={onChange} />
        </div>
        <div>
          <input placeholder='' type='text' onChange={onChange} />
        </div>
        <button className='button' type='submit'>
          Join room
        </button>
      </div>
    </div>
  );
};

export default Join;
