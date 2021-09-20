import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { DynamicLayout } from 'root/layouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicLayout type={pageProps.layoutType}>
      <Component {...pageProps} />
    </DynamicLayout>
  );
}
