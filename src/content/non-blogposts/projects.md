# Projects that I've taken part in

_(Updated September 2023)_

Ever since I started my learning journey as a developer I've participated in multiple projects with different technologies and varying degrees of complexity.

## [A Discord bot (link to repository)](https://github.com/MISTCLICK/vEuroExpressBot)

My first ever personal project was a Discord bot for a virtual airline that me and some of my friends were running at the time. The bot included some basic functions, like fetching airport weather (METAR and TAF) and logging server events. This project was the one that helped me explore the world of software development: my first ever database (regrettably MongoDB, to be honest, it's a good DB, just not the right choice for a developer's first ever project), OAuth handling, working with strings, data parsing, optimisation, etc. I encountered all of those problems while building my first ever project and that definitely taught me a lot. With that experience I started experimenting with various different challenges and found a passion for parsing data of different shapes and types.

I also have a copy of this bot written in Python with some other functionality, but my experience with Python is a lot more limited and I am not as confident with it as I am with JavaScript.

## [My first full stack project - a virtual airline (link to repository)](https://github.com/MISTCLICK/vEuroExpress-WebSys)

This was quite a nightmare to work on to be completely honest, but I still enjoyed it, nonetheless. Our virtual airline was using a PHP made-ready virtual airline manager solution that I was not fond of. After consuming a rather large number of guides on YouTube I settled for React as my framework of choice due to, well, reactivity. I didn't know anything about Next.js, SSR and other proper development patterns. In the end it was the MERN stack 😂. Surely a questionable decision, but what makes it even more questionable is the use of `create-react-app` for the client. I'd like to point out that the use of Express really helped me to develop a deeper understanding of the web on the fundamental level. This is also the project that taught me to be aware of the stupidity, so to speak, of an average user. I tried my best to make an intuitive interface for a somewhat good user experience and unfortunately that was much harder than I thought. Still, besides knowledge, one of my main takeaways from this project is that choosing good tech will affect both your own and user experience for the entire lifetime of the project.

Unfortunately, the virtual airline is no longer operational, but here are some screenshots of the website if anyone is interested to see my style and ideas. I will keep those as links to this website's CDN just so this page is not too flooded. _[Link 1.](/cdn/vex-top.png) [Link 2.](/cdn/vex-bottom.png)_

This project together with the [previously mentioned Discord bot](#a-discord-bot-link-to-repository) also forced me to encounter SQL in the form of MariaDB. That definitely was a good thing, however, I wasn't smart enough to use an ORM back then, so I just went with raw SQL queries. I guess, there is nothing wrong with that and I learned a lot too, but damn, that was hard. Since then, in a couple of my personal experiments I have tried Prisma (mostly) and Drizzle ORM (like a couple times). Long story short: relational DBs are a great, I love them, but I still like to try as many tools as I can.

This project also included a virtual flight tracker app that I decided to make in Electron + the good old `create-react-app`. To be honest, it was as hard in terms of caring for user experience as it was with the website. Still enjoyed it a lot, not going to lie. :) I will point out that I'd love to build something else with Electron again (I actually am already working on something, but it's private for now, though I can guarantee that the quality of my code will be better). Not much else to say here. :)

_Note: I am also really ashamed of committing transpiled .js files to the repository. Please don't judge, I already hate myself enough for this._

## My research paper [private repository for legal reasons]; website hosted at [<span class="text-blue-600">lostrabbit.lv</span>](https://lostrabbit.lv)

I am working on a scientific research paper in computer science: `THE INFLUENCE OF AI HELP ON THE PRODUCTIVITY AND EFFECTIVENESS OF HUMAN PROBLEM SOLVING` (originally in Latvian: _`MĀKSLĪGĀ INTELEKTA PALĪDZĪBAS IETEKME UZ CILVĒKA PROBLĒMRISINĀŠANAS PRODUKTIVITĀTI UN EFEKTIVITĀTI`_). I am working in a team with a friend of mine; and this project was a great learning opportunity for both of us. The goals of the research include, but are not limited to:

- Find out, to which category of the _Diffusion of innovations_ theory young people belong as of 2023.-2024. by surveying the respective group of people.
- Determine the viability of using AI models on a daily basis in an office workspace for the current and future working generations.

This project is based around a game consisting of 20 mazes. Pretty much the whole web interface is written with Next.js and TypeScript, but, obviously, the AI model required us to explore TensorFlow Sequential models. We have been working on this project since the start of 2022. and are due to publish the paper in 2024. This project forced me to explore CSS more in depth than ever before and also was my first experience with Tailwind CSS. It was really important to ensure easy to navigate interface and linear user experience for all participants of our experiment. For anyone who's interested, the project architecture looks like this:

- Next.js as frontend and backend
- Redis with persistence as DB for experiment results (yeah, we didn't need much other than a key-value store here)
- TensorFlow for the AI model

A full list of sources and other literature will be published here after the research paper is finished.

## A template for my school's website [private repository for legal reasons]

This was my opportunity to learn Astro and enhance my knowledge of CSS even further. Unfortunately, that was turned down by the school so not much else to say here.

## [This website (link to repository)](https://github.com/MISTCLICK/mistclick-a-astro)

Well, obviously. I really wanted to actually ship something with Astro, so I started working on this website. I used my previous experience and I hope to extend my knowledge of SEO with this project. I hope to find some other purpose for this project other than what it already is. My short-term goals right now look something like this:

- Improve and figure out SEO in general
- Implement pagination at [/blog](/blog) once I made more than 10 posts
- Maybe add a newsletter?
- Figure out some kind of client-side functionality. Do I even need it? If so, what could I offer to the user?
- idk??

For now, that's it. Who knows, what exciting opportunities await me. I hope that my learning journey doesn't stop here.

Let the skies be clear. ✈️
