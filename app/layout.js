import './globals.css';

export const metadata = {
  title: 'JS Arena — Gamified JavaScript Practice',
  description: 'Practice JavaScript concepts with an addictive gamified experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-bg text-gray-300 font-sans">{children}</body>
    </html>
  );
}
