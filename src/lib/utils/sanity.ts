import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-12-26'
};

export default createClient(config);
