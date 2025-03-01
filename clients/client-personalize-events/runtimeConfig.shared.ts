import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PersonalizeEventsClientConfig } from "./PersonalizeEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeEventsClientConfig = {}) => ({
  apiVersion: "2018-03-22",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Personalize Events",
  urlParser: config.urlParser ?? parseUrl,
});
