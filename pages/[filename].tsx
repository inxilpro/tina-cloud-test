import {getStaticPropsForTina, staticRequest} from "tinacms";
import {layoutQueryFragment} from "../components/layout";
import type {PagesDocument} from "../.tina/__generated__/types";
import Page from "../components/page";

export default function HomePage(props: AsyncReturnType<typeof getStaticProps>["props"]) {
  return (
      <Page {...props.data.getPagesDocument} />
  );
}

export const getStaticProps = async ({params}) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query ContentQuery($relativePath: String!) {
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          __typename
          id
          data {
            __typename
            title
            sections {
              __typename
              ... on PagesSectionsContent {
                body
                color
              }
            }
          }
        }
      }
      # ${params.filename}.md
    `,
    variables: {relativePath: `${params.filename}.md`},
  })) as { data: { getPagesDocument: PagesDocument } };
  
  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData = (await staticRequest({
    query: `#graphql
    {
      getPagesList {
        edges {
          node {
            sys {
              filename
            }
          }
        }
      }
    }
    `,
  })) as any;
  return {
    paths: pagesListData.getPagesList.edges.map((page) => ({
      params: {filename: page.node.sys.filename},
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;
