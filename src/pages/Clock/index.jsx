import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import 'react-clock/dist/Clock.css';

function Clock() {
  const [hours, setHours] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <Container>
      {hours}
    </Container>
  );
}

export default Clock;