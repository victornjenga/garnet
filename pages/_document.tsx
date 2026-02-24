import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Premier Garnet Limited - General Service Provider offering office supplies, IT equipment, construction materials, foodstuff supplies, and more across Kenya and East Africa."
        />
        <meta
          name="keywords"
          content="office supplies, IT equipment, construction materials, foodstuff supplies, Kenya, East Africa, business services"
        />
        <meta name="author" content="Premier Garnet Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
