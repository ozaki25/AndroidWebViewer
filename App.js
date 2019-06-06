import React from 'react';
import { SafeAreaView, WebView } from 'react-native';

function App() {
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
