import React from 'react';
import { StatusBar } from 'react-native';

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar
        hidden={true}
      />

      <Dashboard />
    </>

  )
}
