---
title: "A Fresh Twitter Clone"
date: 2023-03-23
draft: false
tags:
  - project
---

I've been working at this little web app for a bit over a week and thought I'd share what I've
discovered.

PS: I'm looking for work!

Contact me on _[Linkedin](https://www.linkedin.com/in/micheal-earl/)_

<!-- ABOUT THE PROJECT -->

### About The Project

Check out a video demo!

[![Mitwi Screen Shot][product-screenshot]](https://www.youtube.com/watch?v=0Ip1Dl0pyxw)

I decided to undertake this project because I wanted to prove to myself and
possible employers that I can quickly adapt to new tech stacks and create
working prototypes.

Ultimately, I think I accomplished that goal.

Unfortunately, I failed to see just how detrimental some of the choices I was
making would be when actually creating a working web app.

Here's why:

- Deno is an incredible javascript runtime. It even support npm modules.
  However, it barely supports npm modules. Many of the things I tried simply did
  not work.
- Deno Deploy is an awesome service for deploying your deno based apps.
  Unfortunately, it does not support Deno's `npm:` specifier. The feature that
  allows you to load commonjs npm modules.
- Because Deno Deploy did not work, and I wanted a live demo of my web app, I
  had to spend countless hours researching and testing alternatives. This was
  not productive.
- Many Node.js libraries and frameworks that appear to function end up having
  issues down the line This meant that I had to redo entire sections of the app
  when a specific things suddenly wouldn't work in my Deno environment.
- Database drivers, query builders, and ORM's are still kind of underdeveloped
  for the Deno runtime. My initial plan was to use Prisma, but for reasons
  stated above, it didn't work out. Instead, I opted for Mongoose. I've never
  used MongoDB and still have very little idea how it actually works.
- Preact is awesome, and this project only made me love it even more. The problem
  is that when I use a React based library, I am now using it through two
  compatability layers: Deno's npm support, and Preacts compat layer.

Of course, even with all of the above roadblocks, I perservered and stubbornly
pushed my way into creating a working web app.

Does this web app scale? Absolutely not. There is no recommendation algorithm
for posts. There is no pagination. I have no idea how to scale a MongoDB
database, but the way I'm interacting with it right now is for sure not going to
scale.

The web app is stateless, and I could load balance between servers without too
much concern, but that's about it.

Is this a good example of a Deno Fresh project? Again, no. This code base is
filled with repeated code, too much interactivity, and not enough thought
towards its architecture. If I were to start over with Deno Fresh and only Deno
based modules, I think I could do a much better job of leveraging Deno's "ship
no javascript by default" approach. As it is now, almost every component is an
island. That's definitely not using Fresh as intended.

### Built With

These are the major components of the web app.

- Deno
- Typescript
- Fresh
- Preact
- Twind (A Tailwind clone without a buildstep)
- JWT Auth
- MongoDB with Mongoose

### Project

Project Link:
[https://github.com/Micheal-Earl/mitwi](https://github.com/Micheal-Earl/mitwi)

### Acknowledgments

When making this project, I heavily referenced "Code with Antonio's" twitter
clone. His clone was made with Node, Next.js, and Prisma.

- [Code With Antonio](https://github.com/AntonioErdeljac)

[product-screenshot]: /images/thumb.png
