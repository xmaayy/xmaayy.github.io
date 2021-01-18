---
title: Image Denoising - Part 1
date: 2021-01-16 17:48:35
tags: Photography, Machine Learning
---

## Background Story Time
Among all the new things I've tried during quarantine, my favourite new hobby has to be photography. I've always had a hand somewhere in something related to media production, whether it was video editing for friends, theater AV crews, or helping teams of media archivers online preserve old videos. Theres something about the mix of hardware and software that just makes it so much fun. After having finally landed my first full time job I had the privilege of being able to invest into hobbies. The first of these new investments was a new camera to use for photography (and hopefully later video production). Because I'd mainly be using this camera for photography of landscapes during the day and while on the go (hiking, snowshoeing, etc) I felt that a camear with good image stabilization was essential. In the end, I went for the Lumix DC-G9 because it did 4k 60fps video (or 180 fps 1080p :O) as well as 20mp stills with very good image stabilization. It also had the option to take 80MP stills if I ever did post up with a tripod, so it seemed like a win-win-win for me. 

After having used the camera for a few months, I can say that it has certainly lived up to my expectations. The only real problem I had with it is that I didn't fully understand what buying a M43 camera would mean for image noise. Covid has pretty well locked me within this province, and with that my options for landscape photography have become almost non-existent with how boring the geography of southern ontario is. So, to still make use of my new camera, I took up wildlife photography. More specifically, I've been trying to get pictures of as many different birds as I can. I'll be using the following owl photos as a test basis for these posts.

<div class="justified-gallery">

![Original Owl Photo](https://live.staticflickr.com/65535/50843440147_313f7e96c6_c.jpg)
![Zoomed Owl](https://live.staticflickr.com/65535/50842662703_d9afa58a76_c.jpg)

</div>

## Why Am I Doing This?
I do almost all of my image processing in Lightroom. Somewhat because its the industry standard, but moreso because the main open source alternatives, like Raw Therapee, were not opening my RAW images properly. Though Lightroom is great at changing exposures and color, I'm not totally convinced by its denoising capabilities. To my knowledge there are 100's of different algorithms for denoising, ranging from basic signal processing to machine. Given how common an issue this will be for me, and how interesting a problem it is, I thought I'd go ahead and make my own and try out some of these different methods.

I'm going to use only the RAW photo

## Image Noise - Why Do You Exist




This is an inline expression: \\(ax^2+bx+c=0\\).

This is another block expression:
\\[f(x) = \int_{-\infty}^\infty\hat f(\xi)e^{2 \pi i \xi x}d\xi\\]