import React from "react";
import Head from "next/head";
import layoutData from "../content/global/index.json";
import Header from "./header";
import Footer from "./footer";

export const Layout = ({data = layoutData, children}) => {
    return (
        <>
            <Head>
                <title>Tina</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`min-h-screen flex flex-col font-sans antialiased`}>
                <Header {...data.header} />
                <div className={`flex-1`}>
                    {children}
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
        links {
          title
          items {
            label
            href
          }
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
