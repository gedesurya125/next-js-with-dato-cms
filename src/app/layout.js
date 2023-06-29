import { NextThemeUiProvider } from 'theme/NextThemeUiProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextThemeUiProvider>{children}</NextThemeUiProvider>
      </body>
    </html>
  );
}
