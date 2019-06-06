import React, { useEffect, useRef } from 'react';
import { BackHandler, SafeAreaView, WebView } from 'react-native';

function App() {
  const webviewEl = useRef(null);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      webviewEl.current.goBack();
      return true;
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://google.com/',
        }}
        ref={webviewEl}
        style={{ flex: 1 }}
        startInLoadingState
      />
    </SafeAreaView>
  );
}

export default App;
