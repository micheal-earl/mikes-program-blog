# My blog

## About

This is my blog.

The readme is mostly here to remind myself some time in the future how all of this works.

I am using the 11ty static site generator.

### Details

- The config can be found in `eleventy.config.js`.
- CSS at `bundle.css`
- Using the liquid template language, thus the .liquid files instead of .html
- Posts are all given a tag and layout automatically with `posts.json`
- I tried to move all relevant files to a /src dir, but then 11ty stopped processing the index, idk

### Pages

- `index.liquid`
- `archive.liquid`
- `projects.liquid`
- `contact.liquid`
- individual posts

### Layouts

- `layout.liquid` The main skeleton of the blog
- `post.liquid` Layout to wrap indiviudal post page with .post class
