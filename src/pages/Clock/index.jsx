import React, { useState, useEffect } from 'react';

import { 
  Container,
  Hours
} from './styles';

import alarmAudio from '../../assets/alarm.mp4';

function Clock() {
  const [hours, setHours] = useState(new Date().toLocaleTimeString());
  const [alarm, setAlarm] = useState('16:56:00');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(date.toLocaleTimeString());
    }, 1000);
  }, []);

  useEffect(() => {
    if(hours === alarm){
      Notification.requestPermission(() => {
        let n = new Notification('Wake Up', {
          body: "Let's Go!"
        });
      });
    }
  }, [hours]);

  return (
    <Container>
      <Hours>{hours}</Hours>
      <audio controls>
        <source src={alarmAudio} type="audio/mp4" />
      </audio>
    </Container>
  );
}

export default Clock;