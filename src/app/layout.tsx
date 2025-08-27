// app/layout.tsx

import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Agroton</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
