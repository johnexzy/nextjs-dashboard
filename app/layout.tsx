import '@/app/ui/global.css';
import { lusitana, bangers } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.variable} ${bangers.variable}`}>{children}</body>
    </html>
  );
}
