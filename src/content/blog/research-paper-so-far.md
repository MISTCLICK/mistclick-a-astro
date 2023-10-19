---
title: AI Research is weird
date: 2023-10-03
description: "About a year ago me and my friend found a way to put more academic achievements on our file: writing a research paper. It's due in 2024, what have we done so far?"
slug: ai-research-is-weird
imageURL: /cdn/diffusion-of-innovations.png
hidden: false
pinned: false
hideImageOnBlogPage: true
---

People have been using the scientific method to solve complex problems for many centuries. It is rather interesting that most education programmes around the world focus so much on teaching the method to their students. Latvia is one of those countries. Upon reaching secondary school, all students get the opportunity to write a research paper in the subject of their choice. Some of the most innovative and groundbreaking papers even get awards and get published. This is actually what me and my friend are going for. I am hoping to pursue an engineering career, albeit software engineering or something else and so we decided to write a research paper in "programming" (this subject is basically introduction to computer science, but our school calls it that for some reason).

The process of picking our topic was chaotic to say the least. Nonetheless, we were sure that we wanted to make something goofy and then succeed with it. Thus, the idea was born. At the time both of us already had basic knowledge about neural networks and AI in general. We decided that our goal was to determine the viability of using AI as an "assistant" for mundane tasks. We're seeing AI-powered assistive tech rolled out all the time. The most recent ones as of today are [v0.dev](https://v0.dev) by Vercel, various browser assistants (e.g. Bing), etc. Is training those models cost-effective? Is it viable to train AI models in small firms with limited funding? How can we implement this as students? We decided to ask and answer of those questions in our paper.

---

## Scope of our research and sources of information

Back in November 2022 we figured that we can test our hypothesis by
One of the primary sources of information that we used to prove the validity of our research was a 1983 book by E. M. Rogers called "Diffusion of Innovations". This book became our starting point of research. We're determined to prove that we're currently in the "early adopters" stage of the spread of AI in society. We've also discovered that there is a research paper commissioned by the European Commission and written by M. Hoffmann and L. Nurski from 2021 that partially supports our claim. The graph below shows how new innovations integrate into our society over time.

![Diffusion of Innovations. The first 2.5% are innovators, 13.5% are early adopters, then the early and the late majorities of 34% each follow, and the last 15% are laggards.](/cdn/diffusion-of-innovations-blog.png)

## Research in practice, our hypothesis and experiment

In the end we came up with the following hypothesis: _Help of an AI model is able to influence human decisions and therefore their productivity as well._ While doing theory research we've even gone through White House reports, however the main sources of information were the aforementioned book and research paper as well as an NBER report from 2023.

Finally, we decided that we didn't need much more than a web-based logical puzzle game and a couple of surveys for the participants to answer in order to test our hypothesis. The tech stack for the testing platform was chosen as follows:

- [x] Next.js with TypeScript for the web page (surveys, info pages, and the game itself; frontend and backend)
- [x] Self-rolled JWT-based auth that generated a new user object for each participant
- [x] Redis as primary DB

We decided that we didn't need anything more complicated than a simple Redis hash to store each participant's info (the initial decision was Redis JSON, but we looked back quite quickly and decided not to overcomplicate things). For reference purposes, the shape of the `user` hash is as follows:

```ts
type User = {
  userId: string;
  groupNum: number; // 0 | 1
  mazeResults: number[]; // Measured in ms.
  surveyAnswers: string;
  feedbackAnswers: string;
  iss: number; // UNIX time of when the object was added to the db.
  st: string; // Internal variable used to enforce linear progression through the experiment.
};
```

We wrote the theory analysis for this paper quite quickly, it only took us 2 months (April-May 2023). As this app wasn't really complicated, the development and testing process lasted about a month. After all the summer travelling and other stuff, we finished all of it in August, and by 27.08.2023 everything was completed. The most time-consuming part was training the AI model to solve the puzzles presented to it. We decided to use mazes as logical puzzles, because they are fairly easy to generate. The AI model that we trained was able to easily solve mazes as large as 200x200 cells.

We started to conduct our experiment on the 11.09.2023 [(accessible at <span class="text-blue-600">lostrabbit.lv</span>)](https://lostrabbit.lv) and plan to continue surveying students, teachers and experts until we have a reasonable data set to work with. At the moment (03.10.2023) 271 unique participants have taken part in our experiment. We hope to reach at least 500 people in total, though, in an ideal world a 1000 would be better.

### A short note about the experiment itself.

**The entire paper and thus is only accessible in Latvian. Thus the experiment is also exclusively in Latvian.** Anyone that wishes to participate in the experiment has to fill out an AI-related survey, complete 20 mazes and leave feedback after that. Our plan is to analyse the spread of AI as a technology among the surveyed sample, record their adaptation skills as well as AI effects on decision making in the maze part, and finally, see the public's feedback on AI usage, their perspective, opinions, etc.

The experiment web page is also a personal UI/UX achievement for me, because so far there has not been a single case of someone misunderstanding the intent of the experiment even without reading anything on the web page. I can thus make the conclusion that the UI is intuitive enough. I would like to point out that even though the UI/UX work was done on my part, graphical and font design was fully done by my research partner.

In conclusion, the whole project has been a ton of fun and a great learning opportunity for both me and my research partner, but sometimes all of it becomes overly confusing. We've definitely considered quitting multiple times, but I am happy that we didn't give up.

Let the skies be clear. ✈️
