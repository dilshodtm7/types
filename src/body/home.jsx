import React, { useEffect, useState } from 'react';

// Custom hook to get query parameters
const useQuery = () => {
  return new URLSearchParams(window.location.search);
};

const App = () => {
  const [refId, setRefId] = useState(null);

  useEffect(() => {
    // Extract refid from URL query parameters
    const query = useQuery();
    const refid = query.get('refid');
    setRefId(refid);

    // Initialize Telegram Web App if the SDK is available
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      // Set background and header color (example customization)
      tg.setBackgroundColor("#212121");
      tg.setHeaderColor("bg_color");

      // Show MainButton and set click action
      tg.MainButton.text = "Proceed";
      tg.MainButton.show();
      tg.MainButton.onClick(() => {
        tg.sendData(`MainButton clicked with refid: ${refid}`);
      });
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#212121', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Welcome to My Web App</h1>
      <p>Ref ID: {refId}</p>
    </div>
  );
};

export default App;
