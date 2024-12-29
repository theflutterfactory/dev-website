import type { PageLoad } from './$types';
import client, { formatProject } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  const projectData: Project[] = await client.fetch(
    '*[_type == "project" && slug == $slug]', { slug }
  );

  if (projectData.length !== 1) {
    throw error(404, 'Project not found');
  }

  const project = formatProject(projectData[0]);

  return { project };
};