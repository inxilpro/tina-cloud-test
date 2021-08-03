import {defineSchema, TinaCloudCollection} from "@tinacms/cli";
import pagesCollection from "./collections/pages";
import globalCollection from "./collections/global";

export default defineSchema({
  collections: [
    globalCollection as TinaCloudCollection,
    pagesCollection as TinaCloudCollection
  ],
});
