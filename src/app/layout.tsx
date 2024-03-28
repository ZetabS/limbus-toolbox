import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Header from '@/app/HeaderComponent';

export const metadata: Metadata = {
  title: '림버스 툴박스',
  description: '림버스 컴퍼니 툴박스'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex h-full w-full flex-col">
      <body className="bg-base-100 flex h-full w-full flex-col">
        <Header></Header>
        <main className="flex h-full w-full">{children}</main>
        <footer>{/* Add footer content here */}</footer>
      </body>
    </html>
  );
}
