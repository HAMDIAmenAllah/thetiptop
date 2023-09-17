import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Script from "next/script";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "TheTipTop",
  description:
    "ThéTipTop a été créé il y a 20 ans par Monsieur Eric Bourdon qui est le gérant de la société. Entrepreneur dans l’âme, il a choisi de tourner son énergie et ses idées vers ce projet et d’organiser un jeu-concours de type tirage au sort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-DJ8MFE64M3" />
          <Script src="https://www.googletagmanager.com/gtag/js?id=UA-282303226-1" />
          <Script id="google-analytics-1" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }
              
              gtag('js', new Date());
              gtag('config', 'G-DJ8MFE64M3'); // Utilisez l'ID de suivi correspondant à votre compte
            `}
          </Script>

          <Script id="google-analytics-2" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
            window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'UA-282303226-1'); // Utilisez l'ID de suivi correspondant à votre compte
            `}
          </Script>
        </Head>
        <main className={`flex flex-col min-h-screen ${montserrat.className}`}>
          <Navbar className="self-start" />
          <div className="flex-grow relative">{children}</div>
          <Footer className="self-end " />
        </main>
        <Script>{`
          window.axeptioSettings= {
          clientId:"64e89c12323024264ca60e68",
          };
          (function(d,s) {
            var t = d.getElementsByTagName(s)[0],e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");`}
        </Script>
      </body>
    </html>
  );
}
