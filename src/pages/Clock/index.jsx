import React, { useState, useEffect } from 'react';

import { 
  Container,
  Hours
} from './styles';

function Clock() {
  const [hours, setHours] = useState();
  const [alarm, setAlarm] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <Container>
      <Hours>{hours}</Hours>
    </Container>
  );
}

export default Clock;