import { Hero } from "../components/hero";

import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta httpEquiv="cleartype" content="on" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <link
          rel="alternate"
          type="application/rss+xml"
          title="EuroPython Blog RSS Feed"
          href="http://blog.europython.eu/rss"
        />

        <title>EuroPython 2023</title>
        <meta name="title" content="EuroPython 2023" />
        <meta name="description" content="" />
        <meta name="author" content="EuroPython" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ep2023.europython.eu" />
        <meta property="og:title" content="EuroPython 2023" />
        <meta property="og:description" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ep2023.europython.eu" />
        <meta property="twitter:title" content="EuroPython 2023" />
        <meta property="twitter:description" content="" />

        <script
          defer
          data-domain="ep2022.europython.eu"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <div className="grid items-center justify-center content-center min-h-screen">
        <Hero />
      </div>
    </>
  );
}
