import * as React from 'react';

import { RNKeycloak, ReactNativeKeycloakProvider } from '../smd';
import Login from './Login';

const keycloak = new RNKeycloak({
  url: 'https://keycloak-dev.apps.smartdev.dev/auth',
  realm: 'jhipster',
  clientId: 'account-console',
});

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: '/realms/jhipster/account/*' }}
    >
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
