import React, { useEffect, useRef, useState } from 'react';
import { AsyncStorage, BackHandler, SafeAreaView, WebView } from 'react-native';

function App() {
  const webviewEl = useRef(null);
  const [uri, setUri] = useState('https://google.com');

  const setupLastUrl = async () => {
    try {
      const lastUrl = await AsyncStorage.getItem('lastUrl');
      setUri(lastUrl);
    } catch (e) {
      alert(e.toString());
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      webviewEl.current.goBack();
      return true;
    });
  }, []);

  useEffect(() => {
    setupLastUrl();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri }}
        ref={webviewEl}
        onNavigationStateChange={({ url }) =>
          AsyncStorage.setItem('lastUrl', url)
        }
        style={{ flex: 1 }}
        startInLoadingState
      />
    </SafeAreaView>
  );
}

export default App;
