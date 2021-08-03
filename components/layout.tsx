import React from "react";
import Head from "next/head";
import layoutData from "../content/global/index.json";
import Header from "./header";
import Footer from "./footer";

export const Layout = ({rawData = "", data = layoutData, children}) => {
    return (
        <>
            <Head>
                <title>Tina</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`min-h-screen flex flex-col font-sans antialiased`}>
                <Header {...data.header} />
                <div className={`container flex-grow`}>
                    <div className={`py-8`}>
                        {children}
                    </div>
                </div>
                <Footer {...data.footer} />
            </div>
        </>
    );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      header {
        nav {
          label
          href
        }
      }
      footer {
        nav {
          label
          href
        }
        social {
          facebook
          twitter
          instagram
        }
      }
    }
  }
`;
