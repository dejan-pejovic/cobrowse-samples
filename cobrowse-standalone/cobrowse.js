
function showCobrowse() {
  
if (window.PureCloud.cobrowse.isSupported()) {
    window.PureCloud.cobrowse.startSharing({
      participant: {
        displayName: 'Dejan Pejovic'
      }
    }, function(err, sharerSession) {
      if (err) {
        console.error('Unable to share page', (err.stack || err));
      }

      console.log('Co-browse initiated. Page is being shared.');
      console.log('Viewer URL: ' + sharerSession.getViewerUrl());
    });
} else {
  throw new Error('Co-browse is not supported');
}

}
