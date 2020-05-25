---
slug: "migrating-gatsby-sapper"
title: "Migrating from Gatsby to Sapper"
seo:
  description: "I just migrated my old personal site from Gatsby to Sapper. It was a fun learning process with quite a few 'gotchas', but well worth the weekend spent on it."
  ogImage: "/images/portrait-josiah-jophlin.jpg"
---

# Migrating from Gatsby to Sapper

So I just migrated my old personal site from Gatsby to Sapper. It was a fun learning process with quite a few 'gotchas', but well worth the weekend spent on it. The stack I'm using is:

- [Tailwindcss](https://tailwindcss.com/) & [PostCSS](https://postcss.org/) for my front-end styling
- Markdown to handle my content
- [Sapper](https://sapper.svelte.dev/docs) for my site
- [Cloudflare worker-sites](https://developers.cloudflare.com/workers/sites) for hosting
- [Github actions](https://help.github.com/en/actions) for my CI workflows

I'll come back and fill in some details on how I set this up, and some of the pitfalls I ran into along the way.
