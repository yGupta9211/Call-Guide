import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function MainApp() {
  const [eventReceived, setEventReceived] = useState(false); // Track if the event is received
  const [agentId, setAgentId] = useState(null); // Store the received agentID

  useEffect(() => {
    console.log('Initializing message listener...');

    const handleMessage = (event) => {
      if (event.origin !== 'https://desktop.wxcc-us1.cisco.com') {
        console.warn('Message received from untrusted origin:', event.origin);
        return;
      }

      console.log('Message received from iframe:', event.data);

      if (!event.data) {
        console.error('Error: No data received in the message.');
        return;
      }

      if (event.data?.type === 'agentID') {
        if (event.data.content) {
          console.log('Received agentID:', event.data.content);
          setAgentId(event.data.content); // Store the agentID
          setEventReceived(true); // Mark the event as received
        } else {
          console.error('Error: agentID content is missing in the message.');
        }
      } else {
        console.error('Error: Unrecognized message type:', event.data.type);
      }
    };

    window.addEventListener('message', handleMessage);
    console.log('Iframe message listener added.');

    return () => {
      console.log('Cleaning up event listener.');
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Block rendering of the App component until the event is received
  if (!eventReceived) {
    // return <div>Waiting for agentID from iframe...</div>; // Display a loading message or spinner
    console.log('event not received');
  }

  return <App agentId={agentId} />; // Pass the agentID as a prop to the App component
}

console.log('React application is initializing...');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);

console.log('React application rendered successfully.');
