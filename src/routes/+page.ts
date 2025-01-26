import type { PageLoad } from "./$types";
import client, { formatProject } from '$lib/utils/sanity';

export const load: PageLoad = async () => {

  const aboutMe: AboutMe[] = await client.fetch(
    '*[_type =="aboutMe"][0].aboutMe'
  );

  const workExperience: DevExperience[] = await client.fetch(
    '*[_type =="devExperience"] | order(startDate desc)'
  );

  const projectData: Project[] = await client.fetch(
    '*[_type =="project"] | order(dateAccomplished desc)'
  );

  const skills: Skill[] = await client.fetch(
    '*[_type =="skills"][0].skillsList'
  );

  const projects = projectData.map(formatProject);

  return {
    aboutMe,
    workExperience,
    projects,
    skills
  };
};  