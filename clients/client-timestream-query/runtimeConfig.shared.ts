import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TimestreamQueryClientConfig } from "./TimestreamQueryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamQueryClientConfig = {}) => ({
  apiVersion: "2018-11-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Timestream Query",
  urlParser: config.urlParser ?? parseUrl,
});
