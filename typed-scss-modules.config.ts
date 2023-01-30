import { ConfigOptions } from "typed-scss-modules/dist/lib/core";

const options: Partial<ConfigOptions> = {
  aliases: {
    "@scss": "src/scss",
  },
  aliasPrefixes: { "@scss": "src/scss" },
  additionalData: "@import 'src/scss/utils/main';",
};
export default options;
