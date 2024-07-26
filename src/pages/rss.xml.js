import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(content) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Muebles dev',
    description: 'My fist page',
    site: content.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}`,
    })),
  });
}