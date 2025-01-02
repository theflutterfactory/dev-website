import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
  projectId: 'at41w4a9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-12-26'
};

const sanityClient = createClient(config);
export default sanityClient;

function buildImageUrl(imageData: SanityImageSource) {
  const imageBuilder = imageUrlBuilder(sanityClient);
  return imageBuilder.image(imageData).url();
}

export function formatProject(project: Project) {
  const formattedProject: FormattedProject = {
    name: project.name,
    company: project.company,
    dateCompleted: project.dateAccomplished,
    stack: project.stack,
    slug: project.slug,
    imageUrl: buildImageUrl(project.image),
    content: project.content.map(formatProjectContent),
  };

  return formattedProject;
}

export function formatProjectContent(content: TextContent | ImageContent) {
  //NOTE: Either 'block' or 'image'
  if (content._type === 'block') {
    const formattedTextContent: FormattedTextContent = {
      type: 'text',
      style: content.style,
      textToRender: content.children.map(item => item.text).join('\n')
    };
    return formattedTextContent;
  } else {
    return {
      type: 'image',
      url: buildImageUrl(content)
    };
  }
}
