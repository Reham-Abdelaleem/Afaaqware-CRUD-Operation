import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import ReactQueryProvider from '../providers/ReactQueryProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

/*== Metadata ==*/
export const metadata: Metadata = {
  title: 'User Management Dashboard',
  description: 'A premium dashboard for user management',
};

/*== Root Layout ==*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Material Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
      </head>

      <body className="antialiased">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}