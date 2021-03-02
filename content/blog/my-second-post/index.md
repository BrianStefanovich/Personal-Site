---
path: "my-second-post"
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
description: "Hello World adlkaj sdkajslkd awsdkjskdjskajlsjdlkajs dkajsk djska jlk djkas djkajld ksdak sdlakjsdkajs dlaskj das"
slug: "my-second-post"
---

# Me encanta el md

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?

> #Esto va a quedar mu lindo
>
> hola esta es una quotation muy bien diseñada

```jsx {numberLines: true}
import React from "react";
import { GitHubIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const date = new Date();
  return (
    <div className="blogFooter">
      <div className="footerIcons">
        <a href="https://github.com/BrianStefanovich/" target="_blank">
          <GitHubIcon className="footerIcon" />
        </a>
        <a href="https://www.instagram.com/b_stefanovich/" target="_blank">
          <InstagramIcon className="footerIcon" />
        </a>
        <a href="https://twitter.com/bstefanovich" target="_blank">
          <TwitterIcon className="footerIcon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/brian-stefanovich">
          <LinkedInIcon className="footerIcon" />
        </a>
      </div>
      <hr className="footerSeparator" />
      <p className="footerText">
        Designed & Built by Brian Stefanovich © {date.getFullYear()}. All rights
        reserved
      </p>
    </div>
  );
}
```
