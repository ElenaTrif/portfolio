'use client'; // Important pour activer les hooks côté client

import { NextUIProvider } from '@nextui-org/react';
import './i18n'; // Importer la configuration i18next

export function Providers({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
