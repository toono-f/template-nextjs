import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
