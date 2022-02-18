# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Ping coming soon page solution](#frontend-mentor---ping-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

**Desktop**

![](/screenshot-desktop.jpeg)

**Desktop error**
![](/screenshot-desktop-hover-error-states.jpeg)

**Mobile**

![](/screenshot-mobile.jpeg)

**Mobile error**

![](/screenshot-mobile-hover-error-status.jpeg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
  

### What I learned

I learned how to make an animation, I encouraged myself to make the title look a bit flashy.


```css
@keyframes mover-titulo {
    0% {
        transform: scale(0)
    }

    25% {
        transform: scale(0.25)
    }

    50% {
        transform: scale(0.50)
    }

    75% {
        transform: scale(0.75)
    }
}
.title {
    font-size: 45px;
    word-spacing: 5px;
    font-weight: 700;
    width: 600px;
    margin: auto;
    animation: normal mover-titulo 4s ease;
}
```

### Continued development

I want to improve in animations, I started to try it for the first time and I really liked it and I would like to improve and expand my knowledge about it.

## Author

- Frontend Mentor - [@Juan13052001](https://www.frontendmentor.io/profile/Juan13052001)
