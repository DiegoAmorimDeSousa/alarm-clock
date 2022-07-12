import React, { useState, useEffect } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';

import { 
  Container,
  Hours,
  BoxAlarms,
  Hour,
  Minute,
  TitleAlarm,
  BodyAlarm
} from './styles';

function Clock() {

  const [hours, setHours] = useState(new Date().toLocaleTimeString());
  const [alarms, setAlarms] = useState([
    {title: 'Teste 1', body: 'Teste 1', hour: '20:10:00'},
    {title: 'Teste 2', body: 'Teste 2', hour: '21:10:00'},
  ]);
  const [arrayAlarms, setArrayAlarms] = useState([]);
  const [showBoxAlarm, setShowBoxAlarm] = useState(true);
  const [hourValue, setHourValue] = useState('');
  const [minuteValue, setMinuteValue] = useState('');
  const [titleAlarm, setTitleAlarm] = useState('');
  const [bodyAlarm, setBodyAlarm] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(date.toLocaleTimeString());
    }, 1000);
  }, []);

  useEffect(() => {

    alarms.map(alarm => {
      if(alarm.hour === hours){
        Notification.requestPermission(() => {
          let n = new Notification(alarm.title, {
            body: alarm.body
          });
        });
      }
    });
  }, [hours]);

  useEffect(() => {setArrayAlarms(alarms)}, [alarms]);

  document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
      let newArray = [];
      alarms.map(alarm => {
        newArray.push(alarm);
      });

      newArray.push({
        title: titleAlarm, body: bodyAlarm, hour: hourValue + ':' + minuteValue + ':00'
      });

      setAlarms(newArray);
      setHourValue('');
      setMinuteValue('');
      setTitleAlarm('');
      setBodyAlarm('');
    }
  });

  return (
    <Container>
      {
        showBoxAlarm ? 
        <BsPlusCircle onClick={() => setShowBoxAlarm(!showBoxAlarm)} /> : 
        <MdOutlineRemoveCircleOutline onClick={() => setShowBoxAlarm(!showBoxAlarm)} />
      }
      {
        showBoxAlarm &&
        <div>
         <div>
          <Hour 
            type="number"
            onChange={e => {
              if(e.target.value.length === 1){
                setHourValue('0' + e.target.value);
              } else {
                setHourValue(e.target.value);
              }
            }}
            value={hourValue}
          />
          :
          <Minute 
            type="number"
            onChange={e => {
              if(e.target.value.length === 1){
                setMinuteValue('0' + e.target.value);
              } else {
                setMinuteValue(e.target.value);
              }
            }}
            value={minuteValue}
          />
         </div>
         <TitleAlarm
          onChange={e => setTitleAlarm(e.target.value)}
          value={titleAlarm}
         />
         <BodyAlarm
          onChange={e => setBodyAlarm(e.target.value)}
          value={bodyAlarm}
         />
        </div>
      }
      <h1>Alarmes:</h1>
      <BoxAlarms>
        {arrayAlarms.map(alarm => {
          return (
            <div>
              <div>{alarm.hour}</div>
              <span>{alarm.title}</span>
            </div>
          )
        })}
      </BoxAlarms>
      <Hours>{hours}</Hours>
    </Container>
  );
}

export default Clock;