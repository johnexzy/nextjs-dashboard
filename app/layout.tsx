import '@/app/ui/global.css';
import { lusitana, bangers, inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
