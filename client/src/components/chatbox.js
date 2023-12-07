// Chatbox.js

import React, { useState } from 'react';

const Chatbox = () => {
  const [isChatboxOpen, setChatboxOpen] = useState(false);

  // Example: Customize the iframe URL based on conditions
  const getIframeSrc = () => {
    const baseUrl = 'https://app.fastbots.ai/embed/';
    const botId = 'clprgm9x7059dppb28utsgxhl';
    const queryParams = new URLSearchParams({
      // Add any additional query parameters as needed
      'data-fab-position': 'right',
      'data-fabbg': '#033e84',
      'data-welcome': 'Hi, How can I help you today?',
      'data-welcome-timeout': '2',
    });

    return `${baseUrl}${botId}?${queryParams.toString()}`;
  };

  const toggleChatbox = () => {
    setChatboxOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      {/* Message icon button to toggle the chatbox */}
      <button onClick={toggleChatbox} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000', background: '#2196F3', color: 'white', padding: '15px', borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: '24px' }}>
        <span role="img" aria-label="Message Icon">💬</span>
      </button>

      {/* Chatbox iframe */}
      {isChatboxOpen && (
        <div id="chatbox-container" style={{ position: 'fixed', bottom: '70px', right: '20px', zIndex: '1000' }}>
          {/* You can customize the container or add additional UI elements here */}
          <iframe
            title="Chatbox"
            src={getIframeSrc()}
            width="400" // Set the width as needed
            height="500" // Set the height as needed
            style={{ border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbox;
