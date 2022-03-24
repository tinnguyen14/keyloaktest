import * as React from 'react';

import { RNKeycloak, ReactNativeKeycloakProvider } from '../smd';
import Login from './Login';

const keycloak = new RNKeycloak({
  url: 'https://keycloak-dev.apps.smartdev.dev/auth/',
  realm: 'dayoff-dev',
  clientId: 'dayoff',
});

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'myapp://Homepage' }}
    >
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
