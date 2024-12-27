import type { PageLoad } from "./$types";
import client from '$lib/utils/sanity';

export const load: PageLoad = async () => {
  const workExperience: DevExperience[] = await client.fetch(
    '*[_type =="devExperience"] | order(startDate desc)'
  );
  return { workExperience };
};  