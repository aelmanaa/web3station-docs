import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { SITE } from "@config";
import { languages } from "@i18n/ui";

export async function getStaticPaths() {
  const result = Object.keys(languages).map(lang => {
    return {
      params: { lang },
    };
  });

  return [...result];
}

export async function get(context: any) {
  const { lang } = context.params as { lang: keyof typeof languages };

  const posts = await getCollection(
    "blog",
    ({ data }) => data.language === lang
  );
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `posts/${slugify(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime),
    })),
  });
}
