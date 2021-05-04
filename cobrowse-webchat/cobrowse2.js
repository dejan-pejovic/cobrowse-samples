(function(window) {
  window.PURECLOUD_WEBCHAT_FRAME_CONFIG = {
    containerEl: 'chat-container'
  };
  var chatConfig = {
    webchatAppUrl: 'https://apps.mypurecloud.com/webchat',
    webchatServiceUrl: 'https://realtime.mypurecloud.com:443',
    orgGuid: 'b969b710-80cf-4689-9bcf-e9f3befa8e05',
    orgId: '21125',
    orgName: 'startelecom',
    queueName : 'Support',
    chatNowElement: 'start-purecloud-chat',
    logLevel: 'INFO',
    reconnectEnabled: true,
    reconnectOrigins: [ 'https://example.com' ]
  };

  window.ININ.webchat.create(chatConfig).then(function(webchat) {
    var startChatButton = document.getElementById('start-purecloud-chat');
    startChatButton.onclick = function onStartChatClick () {
      return webchat.renderFrame({
        containerEl: 'chat-container'
      }).catch(function(error) {
        console.error('Error starting chat');
        console.error(error);
      });
    };
  }).catch(function(error) {
    console.error('Error initializing chat');
    console.error(error);
  });
})(window);
