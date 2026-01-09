import { createClient, type ClientConfig } from "@sanity/client";

// Validate required environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-03-07';

if (!projectId) {
	throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable');
}

if (!dataset) {
	throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable');
}

const config: ClientConfig = {
	projectId,
	dataset,
	useCdn: false, // set to `false` to bypass the edge cache for fresh data
	apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
	ignoreBrowserTokenWarning: true,
};

const client = createClient(config);

export default client;
