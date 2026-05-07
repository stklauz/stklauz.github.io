---
title: "How to organize Figma"
date: 2021-07-03T08:47:11+01:00
draft: false
page: false
# summary:

# Lists
keywords: 
tags:
categories:
  - "Design"
---

Anyone who's tried Figma can see how amazing it can be! But how do you keep it tidy, organized, and scalable?

Last year, our team decided to move all our files from Sketch to Figma. We had around 250+ sketch files (🥲) and kept struggling to keep ‘em up-to-date between ourselves. Compared to our previous toolset, from a price standpoint, moving to Figma was a no-brainer. However, because of how many files we had, we couldn't just throw ourselves at it. We planned a transition period, and our first action point was understanding “how to organize Figma".

As we explored different approaches, I remember there wasn't too much information about organizing Figma. So, hopefully, today I can share a little bit of what I learned (and feel free to give me some feedback!).


## Understanding your users

As you move to a new tool, you must understand who will be using it, and what they need from it. In the case of Figma, you will most likely have three types of users:



* **Designers & Writers** who need to understand end-to-end flows and iterate over them in the scope of a user story or Jira ticket;
* **Developers** that need to understand what to implement within such scope, visual and interaction wise;
* **Product Managers & Stakeholders** that need to find items for consultation, and comment/contribute to designs.

So, based on my experience and the needs above, we’ll go through **Findability** and **Delivery**.


## Findability

In Figma you'll be working with 4 possible levels of information:

Teams → Projects → Files → Pages

Assuming that you’ll be organizing your deliverables into Files, you can use Projects quite freely. Just using Projects, you could start with:



* a place for your **libraries** (design system libraries)
* a **sandbox/playground** area, where people can create random files about random topics (for jam sessions, presentations, etc)
* a place for any **user research** related topics (if applicable)
* a place for any **marketing/branding** related topics (if applicable)
* and _most importantly,_ several places to organize your **projects/products**

Projects/products depend on how your team has been working:


![Project setup examples](/images/2021/figma/Projects.png "Simple Team setup  |  Single Product with a lot of Files  |  Several Products")


If you start feeling that Figma is getting cluttered by using Projects alone, consider looking into the “Organization” pricing plan, where you can have as many Teams as you want. Yes, Teams can be used when you want other teams in the org to join, but you can name those Teams after your Products, gaining a whole level of organization. Libraries can still be shared across teams, and you gain access to some pretty nice [Design System Analytics](https://www.figma.com/blog/introducing-design-system-analytics/).

Also, emojis are your friends. Use them wisely. ❤️


## Delivery

Like I mentioned above, you’ll need to create ways of providing end-to-end context to your designers, while at the same time delivering specific flows to your developers. But then, this means that the files your Designers will need will be very different from the ones they need to create.

So, the million-dollar question is, should your files focus on Deliverables or Layouts? Let me explain what this means:



* **a File per Layout/Page/Flow** focuses on a pre-defined scope, like a page or flow.

    This may seem counterproductive, but it can help designers get the context of all states a page will go through, for example. It also makes life easier for PMs looking for all the states on a Dashboard, Authentication, etc. And finally, it will also be very valuable for more complex organizations, as long as they segment themselves within the same scope (for example, if a designer in a big company works on the Payments / Returns team, this model can be ideal).


    The biggest con is the risk of creating messy complex files where people can’t find what they are looking for. Another big con here is handling flows that go across different pages. 

    ![File per layout example](/images/2021/figma/file-per-layout.png)


* **a File per Delivery** can have many pages all in one place. 

    They go deep into the specific flow being delivered and make the job for developers much easier to grasp. This is great as you can include in these files all information related to this specific place, such as Research, Prototypes, Wireframes, etc.


    The biggest con, as expected, is losing context. Delivery files can become “discardable”, the team uses it once and only looks at it later as an informative resource. This means that it will be much easier for designers to duplicate flows, and create redundancy in the Product, as they won’t be sure of what already exists.


    ![File per delivery example](/images/2021/figma/file-per-delivery.png)


Both approaches work great, but when used by themselves, they can create big problems for teams. This means that the best approach would be some sort of combination between the two:



* **Having a File per Layout with areas for deliveries.**

    Any mention of other Layouts of flows can be done using a link to that file or using an instance of that Page (if you keep your Layouts centralized in a single/multiple libraries). 


    Findability can be worked around by creating an introduction page in the file (where Devs can see the latest items the team has been working on) or organizing using the Pages for deliveries along with Jira Ids or any other Identifier.

* **Having a File per Delivery connected to a Layout Library.**

     Files per Delivery can work great, as long as there’s a unified place for a designer to center all their Page Layouts and states in a single place. 


    A Layout library is the idea of having all “master” layouts in one place that all your team can work with. These Layouts can become components, that will later be applied as instances on Delivery Files.


    Creating Layout components may seem daunting, as maintenance can sometimes be a pain. For a successful Layout Library, you should divide as much as possible, document properly, and avoid deleting elements at all costs. I may do a short post on this next.


<!-- image should go here -->

The best way of understanding what’s best for you is by trying it yourself. Start with a small Jira task/user story, try both approaches, and present it to your team. Starting a discussion about it can help immensely understanding what works for you and the edge cases you may be ignoring.

A heads up! This year Figma is working on [introducing Branching](https://www.figma.com/best-practices/branching-in-figma/), and it seems like it will be possible to "share branches" as deliverables to your developers. That means that the way we create “scoped deliveries” may change in the future and that Page/Flow files become much more attractive for versioning purposes (creating V1, V2, and V3s of a flow). 😈 



#### So, what should I include in a File then?

Well, everything you may need. Besides the regular mockups and flows, consider including a sandbox area, an archive, a research base, a cover, etc ... Actually, there’s a lot of information on this already in [Figma’s Documentation](https://www.figma.com/best-practices/guide-to-developer-handoff/file-organization/)! 



#### **How do I keep my Files consistent?**

Well, this is my approach: create a file template that everybody can duplicate and use. This would include all the sections a file should have, plus help designers maintain a consistent structure across all files. 

Another useful thing is creating a "File Library" where you have all file-related components in one place, like covers, deliverable containers, flow structures, and any other elements that will make your files look consistent all across the org! :)


## Wrapping up

This post only scratches the surface, but hopefully, it can give you some food for thought. Also, keep in mind that the organization that you adopt will most certainly depend on your team/organization’s needs. So, before anything, ask your teammates what is working and not working for them, and go from there. By organizing Figma you'll be designing your team's workflow so, like any design task, don't forget to prototype, test, iterate and overcommunicate. 😉

In the meantime, here are a few other articles that you may find interesting on the subject.



* [Figma's Keeping files organized for your team](https://www.figma.com/best-practices/guide-to-developer-handoff/file-organization/)
* [Figma’s organizing best practices](https://www.figma.com/best-practices/team-file-organization/files/)
* [How to keep your Figma files organized for your design team](https://uxdesign.cc/how-to-keep-your-figma-files-organized-for-your-design-team-16c488a94a4b)
* [How We Organize Our Files and Projects in Figma](https://graphcms.com/blog/how-we-organize-our-files-and-projects-in-figma)

Cheers!
