import { DevToggleDraftButton } from 'components';
import './globals.css';

import { NextThemeUiProvider } from 'theme/NextThemeUiProvider';
import { draftMode } from 'next/headers';

export default function RootLayout({ children }) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body>
        <NextThemeUiProvider>
          {children}
          <DevToggleDraftButton isDraftModeEnabled={isEnabled} />
        </NextThemeUiProvider>
      </body>
    </html>
  );
}
