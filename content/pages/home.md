---
blocks:
  - tagline: ''
    headline: Welcome to my Tina test!
    text: This is a test project. Just messing around!
    actions:
      - label: Get Started
        type: button
        icon: true
        link: /posts
      - label: Read Blog
        type: link
        icon: false
        link: /posts
    image:
      src: tina-illustration.png
      alt: Tina
    color: default
    _template: hero
  - items:
      - icon:
          color: red
          style: float
          name: code
        title: Changed on Vercel
        text: This is edited via Tina Cloud in Vercel
      - icon:
          color: primary
          style: float
          name: like
        title: This Is a Feature
        text: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
      - icon:
          color: green
          style: float
          name: palette
        title: Configurable Theme
        text: >-
          Edit global theme configuration with Tina. Change your theme's primary
          color, font, or icon set.
    color: primary
    _template: features
---

