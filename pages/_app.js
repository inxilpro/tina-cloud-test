import "../styles.css";
import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";
import { v4 as uuid } from 'uuid';

const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT = Boolean(Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0));

const App = (props) => {
    return (
        <TinaEditProvider 
            showEditButton={ true } 
            editMode={ <AppEditMode { ...props } /> }
            children={ <AppLayout { ...props } /> }
        />
    );
};

const AppEditMode = ({ Component, pageProps }) => {
    const cmsCallback = (cms) => {
        cms.fields.add({
            name: 'uuid',
            Component: ({ input, meta, field }) => {
                let value = `${ input.value }`;
                
                if ('' === value) {
                    value = uuid();
                    input.onChange(value);
                }
                
                return <input {...{ ...input, value }} type="hidden" />;
            },
            validate: () => true,
        });
        import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
            cms.plugins.add(MarkdownFieldPlugin);
        });
    };
    
    const universalItemProps = item => {
        const props = {};
    
        ['title', 'label', 'name', 'body'].find(key => {
            if (key in item) {
                let label = item[key];
                if (label.length > 33) {
                    label = label.substring(0, 30) + '...';
                }
                props.label = label;
                return true;
            }
        });
    
        return props;
    };
    
    const walkFields = (fields) => {
        return fields.map(field => {
            if (field.list) {
                if ('blocks' === field.component) {
                    Object.keys(field.templates).forEach(key => {
                        field.templates[key].itemProps = universalItemProps;
                    });
                } else {
                    field.itemProps = universalItemProps;
                }
            }
            
            if ('fields' in field && Array.isArray(field.fields)) {
                field.fields = walkFields(field.fields);
            }
            
            return field;
        });
    };
    
    const formifyCallback = ({ formConfig, createForm, createGlobalForm }) => {
        formConfig.fields = walkFields(formConfig.fields);
        
        return formConfig.id.includes('Global')
            ? createGlobalForm(formConfig)
            : createForm(formConfig);
    };
    
    return (
        <TinaCMS
            branch="main"
            clientId={ NEXT_PUBLIC_TINA_CLIENT_ID }
            isLocalClient={ NEXT_PUBLIC_USE_LOCAL_CLIENT }
            mediaStore={ TinaCloudCloudinaryMediaStore }
            cmsCallback={ cmsCallback }
            formifyCallback={ formifyCallback }
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
