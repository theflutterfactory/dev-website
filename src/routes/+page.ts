import type { PageLoad } from "./$types";
import client, { formatProject } from '$lib/utils/sanity';

export const load: PageLoad = async () => {
  const workExperience: DevExperience[] = await client.fetch(
    '*[_type =="devExperience"] | order(startDate desc)'
  );

  const projectData: Project[] = await client.fetch(
    '*[_type =="project"] | order(dateAccomplished desc)'
  );

  const projects = projectData.map(formatProject);

  return {
    workExperience,
    projects
  };
};  