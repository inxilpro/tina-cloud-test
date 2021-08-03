import {getStaticPropsForTina, staticRequest} from "tinacms";
import {layoutQueryFragment} from "../components/layout";
import type {PagesDocument} from "../.tina/__generated__/types";

export default function HomePage(props: AsyncReturnType<typeof getStaticProps>["props"]) {
  return (
      <pre children={JSON.stringify(props.data.getPagesDocument, null, 2)} />
  );
}

export const getStaticProps = async ({params}) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query ContentQuery($relativePath: String!) {
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          id
          data {
            title
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
