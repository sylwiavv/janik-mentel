import * as React from 'react';

export const Announcement = () => (
  <div style={{
    backgroundColor: '#fff',
    zIndex: 10,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    right: 0,
    bottom: 0,
    padding: '56px',
  }}
  >
    <h3 style={{
      margin: 0, marginBottom: '16px', fontWeight: 700, fontSize: '24px',
    }}
    >
      Urlop wypoczynkowy
    </h3>
    <p style={{ color: '#343434', padding: 0, margin: 0 }}>
      W dniach
      {' '}
      <b>17.09 – 25.09.2024</b>
      zakład
      <br></br>
      będzie nieczynny.
    </p>
  </div>
);
