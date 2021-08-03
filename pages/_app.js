import "../styles.css";
import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";

const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT = Boolean(Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0));

const App = (props) => {
    return (
        <>
            <TinaEditProvider showEditButton={ true } editMode={ <AppEditMode {...props} /> }>
                <AppLayout {...props} />
            </TinaEditProvider>
        </>
    );
};

const AppEditMode = ({ Component, pageProps }) => {
    const cmsCallback = (cms) => {
        import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
            cms.plugins.add(MarkdownFieldPlugin);
        });
    };
    
    return (
        <TinaCMS
            branch="main"
            clientId={ NEXT_PUBLIC_TINA_CLIENT_ID }
            isLocalClient={ NEXT_PUBLIC_USE_LOCAL_CLIENT }
            mediaStore={ TinaCloudCloudinaryMediaStore }
            cmsCallback={ cmsCallback }
            children={ livePageProps => <AppLayout Component={ Component } pageProps={ livePageProps } /> }
            { ...pageProps }
        />
    );
};

const AppLayout = ({ Component, pageProps }) => {
    return (
        <Layout data={ pageProps.data?.getGlobalDocument?.data }>
            <Component { ...pageProps } />
        </Layout>
    );
};

export default App;
