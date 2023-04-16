import type { CollectionEntry } from "astro:content";
import type { languages } from "@i18n/ui";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) =>
  posts.sort(
    (a, b) =>
      Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
      Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
  );

export default getSortedPosts;
