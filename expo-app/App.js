import { WebView } from 'react-native-webview';
import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from './src/notifications';

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <WebView source={{ uri: "https://your-project.vercel.app" }} />
  );
}
