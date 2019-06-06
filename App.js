import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView, WebView } from 'react-native';

function App() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://google.com/',
        }}
        style={{ flex: 1 }}
        startInLoadingState
      />
    </SafeAreaView>
  );
}

export default App;
