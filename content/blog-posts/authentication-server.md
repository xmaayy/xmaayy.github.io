---
title: Full Stack | Authentication
description: A brief look into what I found when looking into how many sites do authentication, and the decisions I made when rolling my own authentication server from scratch in rust.
tagline: Its written in rust so it has to be secure.... right.... right??
preview_img: /coffee.jpg
preview_alt: A placeholder coffee image
tags:
    - Rust
    - Development
    - Authentication
---

# Introduction
I've started working more and more on fun little web projects during some time I set aside to learn new things. A large portion of my daily work involved mostly backend dev, so I've had so little experience with anything that people can interact with. This made me a bit curious about how the other side was living. Were the front line devs (design, ui, etc) experiencing the same nagging problems that I was? Was JavaScript and its viral ecosystem really as bad as HackerNews makes it out to be? Can I make something that doesn't look like a 12 year old has done it in a weekend (I hear middle schoolers are getting pretty good at coding now, maybe its not an insult)? My hope is to give a colorful description of my adventures through full-stack land, and hopefully come out the other side enlightened, rather than jaded. 

I'm starting this series with something a little more my pace, authentication, and then I'll move more and more into the user facing side of things. Rest assured I have a significant amount of time invested in more front-endy things, this was just the most concrete element that I could get out first.

# Other Sections
Coming soon...

# Tidying Up
One of the final steps was to build and deploy this using docker. Not because I feel some sort of obligation to force everything into the most modern framework, its just how I'm choosing to organize the services that make up my little web project. My first attempt at building this container resulted in something that was about 1.8GB, which I knew wasn't the best I could do for a project this small.
```
xmaayy/authy            0.1        9066a6dba6d5    1.78GB
```
So I went about scrubbing out the dist folder and all the downloaded packages after building, but it was still weighing in at well over 1.3GB. After a little searching about the proper way to sanitize / build rust files in a container, I learned of a very neat pattern that docker allows: **Builder Images**. You see, the Rust docker container itself is around 1.3GB. It has to have a pre-installed version of `rustc`, `cargo`, etc and all the other build tools required to spit out the tiny executable that I actually I wanted. Once we've build the executable, we really have no use for any of that other stuff bundled inside the docker container. So, we can use a **builder** stage. What you can do is have multiple docker containers defined in a dockerfile, with only one being the final image you want to push to your image control. In my case, I defined them like this:
```
FROM rust:1.54 as builder

... setup ...

RUN cargo build --release

FROM debian:buster-slim
... setup ...
ARG APP=/usr/src/authy  <----- pulling in the executable here

CMD ["./authy"]
```

So with these two distinct stages, we get to discard the really big rust builder image, and just pull in the executable for use in the second container which we'll actually deploy later on. This got the final size under <100MB, which is only about 30MB more than the initial container its being deployed on. 
```
xmaayy/authy            0.3           bf79062397d0     94.3MB
```