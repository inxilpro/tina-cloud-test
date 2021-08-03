import {defineSchema} from "@tinacms/cli";
import pagesCollection from "./collections/pages";
import globalCollection from "./collections/global";

export default defineSchema({
  collections: [
    globalCollection,
    pagesCollection
  ],
});
