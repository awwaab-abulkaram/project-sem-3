import React, { useEffect } from 'react';

const BotWeb = () => {
  useEffect(() => {
    // Initialize the Botpress WebChat
    window.botpressWebChat.init({
      botId: "07caf4e0-62b5-4642-9c7c-e34e37e86151",
      clientId: "07caf4e0-62b5-4642-9c7c-e34e37e86151",
      hostUrl: "https://cdn.botpress.cloud/webchat/v0",
      messagingUrl: "https://messaging.botpress.cloud",
      botName: "Nyaay Sahaayak",
      containerWidth: "100%25",
      layoutWidth: "100%25",
      hideWidget: true,
      disableAnimations: true,
      showCloseButton: false,
      showConversationsButton: false,
      enableConversationDeletion: true 
    });

    // Opens up the Chatbot by default
    window.botpressWebChat.onEvent(
      function () {
        window.botpressWebChat.sendEvent({ type: "show" });
      },
      ["LIFECYCLE.LOADED"]
    );

    // Clean up the Botpress WebChat when the component is unmounted
    return () => {
      // Add any cleanup code if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return
};

export default BotWeb;
