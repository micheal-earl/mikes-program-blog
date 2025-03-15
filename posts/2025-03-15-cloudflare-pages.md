---
title: "Migrating to Cloudflare Pages"
date: 2025-03-15
draft: false
tags:
  - thoughts
---

## Why?

I recently [ported my blog](/posts/2025-03-12-porting-blog-to-11ty/) to the 11ty static site generator. It went well.

On the other hand, I hadn't used my old hosting provider, Netlify, in a long time. Everything went pretty well setting up 11ty on Netlify so my problem isn't really with the quality of the service in that regard.

However, after doing some research, I found that Netlify has a reputation for poor customer support. It's possible I could have a [massive bill](https://news.ycombinator.com/item?id=39520776) dropped on my head with very little support from Netlify.

I looked for alternatives and landed on Cloudflare pages. So far, everything has worked flawlessly, and Cloudflare's free plan is arguably more generous than Netlify’s paid plan.

## How?

I created an account on Cloudflare, navigated to the 'Workers & Pages' section, and set up a new page.

It wasn't exactly _that_ simple, though. I had to point it to the correct repo and specify the static output directory plus set the build command.

Then again, maybe it was that simple.
