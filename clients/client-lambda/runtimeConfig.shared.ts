import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LambdaClientConfig } from "./LambdaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LambdaClientConfig = {}) => ({
  apiVersion: "2015-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Lambda",
  urlParser: config.urlParser ?? parseUrl,
});
