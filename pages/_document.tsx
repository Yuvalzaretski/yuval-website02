// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* אפשר להוסיף כאן גם גופנים או תגים אחרים בעתיד */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
