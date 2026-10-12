The landing page should feel like a **senior consultancy first, and a software factory second**. The visitor shouldn't leave thinking "Brian programs in .NET, React and Azure," but rather:

**"This person understands how to connect technical decisions with business decisions, and can probably help me make sense of my problem."**

That principle should govern design, copy, visual hierarchy and conversion. It also fits directly with your brand manual: diagnosis first, explicit trade-offs, clarity before complexity, and every recommendation tied to a business consequence. 

---

# 1. Landing page goal

The page has a single primary commercial goal:

> **Get a qualified prospect to book a first 30-minute conversation.**

I wouldn't try to close a consulting engagement from the website.

The landing page has to achieve three prior micro-conversions:

1. **Recognition:** "this problem looks like mine."
2. **Credibility:** "Brian seems to understand this kind of situation."
3. **Low risk:** "I can talk to him without committing to anything or entering an aggressive sales process."

So:

**Problem → relevance → judgment → solution → evidence → trust → CTA.**

Not:

**company → services → technologies → form.**

---

# 2. Creative concept for the site

I'd define the creative direction as:

## **"Visible architecture"**

The website should look like a system that is being thought through.

Not a futuristic tech page.

Not a creative agency.

Not a generic corporate website.

Visually it should lightly recall:

* architecture schematics;
* diagrams;
* technical blueprints;
* connections between decisions;
* layers;
* dependencies;
* nodes;
* alternative paths;
* technical annotations.

But in an **extremely abstract and editorial** way.

This fits very well with the visual system you've already defined: hairlines, technical frames, monospaced typography for labels and a practically monochrome design. 

The central visual metaphor would be:

> **A problem can have several paths. Architecture is knowing which one to choose.**

This connects perfectly with:

**"Better software starts with better decisions."**

---

# 3. Sitemap

Even though it's a landing page, I'd design an architecture from now on that can grow.

## Initial phase

```text
/
├── #problems
├── #services
├── #how-i-work
├── #cases
├── #about
├── #faq
└── #contact
```

It's a single page.

The menu uses anchors and takes you to each section without complex navigation.

### Navigation

**Brian Stefanovich**

Services
How I work
Cases
About me

**Let's talk for 30 minutes →**

I wouldn't add anything more.

---

## Future evolution

Once you have case studies and SEO content:

```text
/
├── /services/
│   ├── existing-systems
│   ├── new-ventures
│   └── fractional-architect
│
├── /cases/
│   └── /[case]
│
├── /insights/
│   └── /[article]
│
├── /about
│
└── /contact
```

The landing page remains the center of the system.

I wouldn't build those pages in the first version unless we need commercial depth or SEO.

---

# 4. Narrative structure

The page should be designed as a conversation.

## 01 — Hero

**What do you do and why should I care?**

↓

## 02 — Problem

**Do you understand what's happening to me?**

↓

## 03 — Three situations

**Which of these looks like me?**

↓

## 04–06 — Services

**How exactly can you help me?**

↓

## 07 — Philosophy

**How do you think?**

↓

## 08 — Process

**What will happen if we work together?**

↓

## 09 — Cases

**Have you done something similar before?**

↓

## 10 — About Brian

**Who is behind all this?**

↓

## 11 — Fit

**Am I the right kind of client?**

↓

## 12 — FAQ

**What's the risk in contacting you?**

↓

## 13 — CTA

**Good. Let's talk.**

That progression is far more important than any visual effect.

---

# 5. Hero

This is the most important area of the site.

It should take up roughly **80–90% of the initial viewport** on desktop and practically the whole first screen on mobile.

I wouldn't use photographs.

I wouldn't use an illustration of a person programming.

I wouldn't use screenshots.

I wouldn't use technology logos.

## Desktop composition

Two asymmetric columns, roughly **7 / 5**.

### Left

Eyebrow:

**ARCHITECTURE · CONSULTING · SOFTWARE**

Headline:

# Better software starts

# with better decisions.

Subheadline:

> I help companies fix the systems that hold them back, build new products and make technical decisions with business judgment.

CTA:

**Let's talk for 30 minutes →**

Microcopy:

**Free first conversation · Not a substitute for an advisory session.**

### Right

Here I'd place one of the brand's distinctive visual elements.

An **interactive abstract decision diagram**.

For example:

```text
PROBLEM

     ┌── Refactor
     │
─────●── Modernize ─────●
     │
     ├── Replace
     │
     └── Don't change
```

One of the lines ends up highlighted in Blueprint.

It doesn't communicate a specific architecture.

It communicates:

**alternatives → decision → direction.**

---

# 6. Hero animation

Very subtle.

On load:

1. the eyebrow appears;
2. the headline enters with a fade/translate of roughly 10–15 px;
3. the subheadline appears;
4. the CTA appears;
5. finally the diagram lines are slowly drawn.

All in roughly **700–1000 ms**.

I wouldn't use letter-by-letter animation.

I wouldn't use a typewriter effect.

I wouldn't use particles.

I wouldn't use aggressive parallax.

I wouldn't use infinite animations.

Your manual already establishes calm, deliberate motion of roughly 200–450 ms for normal interactions. 

After the entrance, the diagram stays practically static.

---

# 7. The first scroll

As the visitor starts scrolling down, I want something important to happen:

they leave the promise behind and immediately enter **their problem**.

### WHEN SOFTWARE STARTS TO WEIGH YOU DOWN

# Not every software problem needs more code.

This section should be visually much emptier.

Big headline.

Little text.

Lots of space.

A small representation can appear:

```text
More code
    ↓
More dependencies
    ↓
More risk
    ↓
More cost of change
```

And a final line:

**Sometimes the first thing we need to change isn't the software. It's the decision.**

I wouldn't turn this section into a long block.

Its function is to mentally reposition the visitor.

---

# 8. The three entry doors

This is probably the second most important commercial section.

Title:

# Three situations. Three ways to help.

Three large cards.

I wouldn't treat them as traditional "service cards."

Each card starts with **the client's situation**.

---

### 01

**THE SYSTEM IS HOLDING THE BUSINESS BACK**

A visual schematic of several layers where one dependency appears to be blocking the others.

↓

**Existing systems**

---

### 02

**THERE'S AN OPPORTUNITY THAT NEEDS TO BECOME SOFTWARE**

Visually:

```text
IDEA
 │
 ├─ hypothesis
 ├─ product
 ├─ software
 └─ business
```

↓

**New software-based ventures**

---

### 03

**THE TEAM NEEDS SENIOR TECHNICAL DIRECTION**

Several branches converging on a decision node.

↓

**Fractional architect**

---

## Interaction

On hover:

* the card's hairline goes from Fog to Blueprint;
* the inner diagram changes slightly;
* an arrow appears or shifts 4–6 px;
* the background never changes dramatically.

The interaction should say:

**"you can come in this way."**

Not:

**"look how interesting this animation is."**

---

# 9. Design of the three service sections

I wouldn't make three large identical blocks.

That makes a long landing page feel monotonous.

I'd keep the same visual grammar but vary the composition.

## Existing systems

More diagnosis.

Visual:

a system of connected boxes where some dependencies create tension.

Labels such as:

`DEPENDENCY`

`RISK`

`COST OF CHANGE`

`DEBT`

And then:

`DIRECTION`

The visual representation should evolve from:

**complexity → clarity.**

---

## New ventures

More open and exploratory.

Visual:

a decision tree.

```text
OPPORTUNITY
      |
      ↓
  HYPOTHESIS
   /      \
VALIDATE  BUILD
            |
           MVP
```

The visual message:

**Not every path ends in code.**

Very powerful for your positioning.

---

## Fractional architect

Here I'd use a different metaphor.

Several areas:

```text
PRODUCT
   \
TEAM ── DECISION ── ARCHITECTURE
   /
BUSINESS
```

The architect occupies the connection point.

Not as a boss.

As a **cross-cutting capability**.

---

# 10. The CTA as a system

There shouldn't be just one CTA at the end.

But there shouldn't be twenty identical buttons either.

I'd use three levels.

## Primary CTA

Solid Blueprint:

**Let's talk for 30 minutes →**

It appears:

* in the hero;
* after the services;
* at the end.

Roughly three times.

---

## Contextual CTA

More discreet links:

**Let's talk about your system →**

**Let's talk about your idea →**

**Let's evaluate whether it makes sense →**

All of them lead to the same scheduler, but we can send a different parameter.

Conceptual example:

```text
?intent=existing-system
?intent=new-product
?intent=fractional
```

This has a lot of commercial value because by the time of the meeting we already know what motivated the prospect.

---

## Persistent CTA

On desktop, the navigation becomes sticky on scroll.

The following always stays at the top right:

**Let's talk for 30 minutes**

On mobile, I'd consider a very discreet bottom bar after the first viewport:

**Let's talk for 30 minutes →**

It shouldn't appear from second zero; it can activate once the user has scrolled roughly 15–20%.

---

# 11. What should happen when the CTA is clicked

Ideally I wouldn't send people straight to Calendly on another page.

I'd open a modal or drawer.

### Let's talk

Short text:

> This conversation is for briefly understanding your situation and evaluating whether it makes sense to work together. It is not an advisory session or a diagnosis.

Then:

**What best describes your situation?**

`Existing system`

`New product`

`Fractional architecture`

`Other`

And only then:

**Choose a time →**

This has two advantages:

it reduces ambiguity and provides context for the meeting.

I wouldn't use a ten-field form.

---

# 12. Case studies

Until they're written, I'd show three structural placeholders.

But visually I'd design the right component from now on.

Each case must start with:

### [PROBLEM]

not with:

### [.NET + React + Azure]

The card should say:

**Situation**

→

**Decision**

→

**Result**

And only at the end:

`STACK / CONTEXT`

This constantly reinforces the same positioning.

Your real experience already lets you support authority in architecture, modernization, fintech, platforms, integrations and technical leadership, without having to turn the website into a CV. 

---

# 13. The "How I think" section

This can become one of the most visually memorable parts.

Title:

# Architecture is a decision, not a goal.

Below it I'd build a kind of **decision canvas**:

```text
BUSINESS
What do we need to achieve?

        ↓

SYSTEM
What constraints exist?

        ↓

ALTERNATIVES
What can we do?

        ↓

TRADE-OFFS
What do we gain and what do we sacrifice?

        ↓

DECISION
What makes sense now?
```

As the user scrolls, each node activates.

Not as a spectacular animation.

As a progressive explanation.

On mobile it simply becomes vertical.

---

# 14. The process

Here I'd use a **vertical stepper**.

```text
01
│
Understand
│
02
│
Make visible
│
03
│
Evaluate
│
04
│
Define
│
05
│
Execute
```

A line connects the five stages.

As the visitor scrolls, the line progressively goes from Fog to Blueprint.

It's a functional animation: it explains progress.

The closing line says:

> **A good decision has to make it into the software.**

And right below:

**Let's talk for 30 minutes →**

It's a natural conversion moment because we've just answered:

**"what would it be like to work with you?"**

---

# 15. About me

I wouldn't present it as a traditional biography.

I'd avoid:

"Hi, I'm Brian…"

The visitor already knows who you are.

I'd use:

### BRIAN STEFANOVICH

# Between business and engineering.

Desktop:

40% portrait / 60% text.

This would probably be **the only major photograph on the whole landing page**.

A real photograph.

Nothing overly corporate.

Medium shot.

Neutral background.

Natural gaze.

Human presence matters here because until now the whole experience has been deliberately technical and abstract.

This section changes:

**"consulting"**

into:

**"I'm going to work with this person."**

This is where it makes sense to introduce Copper in an extremely discreet way, because your manual reserves it for a more human dimension. 

---

# 16. Visual system

Your manual already provides a very good foundation and I'd keep it almost intact. 

## Background

Main:

**Porcelain #F4F0E8**

Occasional alternation:

**Carbon #101311**

I wouldn't go with pure white + pure black.

Porcelain gives it a slightly editorial and more sophisticated quality.

---

## Action

**Blueprint #465CD4**

Only for:

* CTAs;
* links;
* active state;
* selected lines;
* important decisions.

This lets the user quickly learn:

> **blue = action / direction.**

Very useful for conversion.

---

## Copper

**#A65330**

Very sparingly.

Not for CTAs.

Not to compete with Blueprint.

It could appear in:

* portrait detail;
* human consequence;
* a quote;
* small annotations.

As the manual establishes. 

---

# 17. Typography

I'd follow the defined typographic architecture exactly.

### Montserrat 700

Headlines.

Large.

Few words.

---

### Open Sans 400

Explanation.

Generous line spacing.

Comfortable reading.

---

### JetBrains Mono 500

For system language:

`PROBLEM`

`DECISION`

`RISK`

`PHASE 01`

`SERVICE 02`

This is important.

JetBrains Mono shouldn't mean "I'm a programmer."

It should mean:

**"you're looking at an annotation inside a system."**

That completely changes how it's perceived. 

---

# 18. Grid and composition

I'd keep the 12-column grid defined in the manual. 

But visually I'd avoid centering everything.

Many SaaS sites end up looking like:

```text
      TITLE
  text text text
    [button]

  card card card
```

Your site should feel more editorial.

I'd use:

* left-aligned headings;
* large empty spaces;
* 7/5 sections;
* 4/8 sections;
* occasionally text taking up only 6 columns;
* diagrams using the other 6.

A lot of **negative space**.

That conveys seniority.

---

# 19. Technical frames

Your manual defines a resource that I'd exploit quite a bit:

**1 px hairline and 2 px bottom border.** 

It can become one of the most recognizable elements of the site.

I'd use these frames around:

* services;
* cases;
* diagrams;
* small decision blocks;
* process.

I wouldn't use shadows.

I wouldn't use glassmorphism.

I wouldn't use big gradients.

I wouldn't use floating cards.

The interface has to feel **built**, not decorated.

---

# 20. Iconography

We wouldn't need many icons.

I'd prefer to design **6–8 custom glyphs** that reuse the logic of the brand symbol:

* layers;
* branching;
* dependency;
* node;
* integration;
* decision;
* system;
* direction.

Always linear.

Never isometric illustrations.

Never 3D icons.

Never emojis.

This explicitly follows the iconography direction in your manual. 

---

# 21. Animations

The rule should be:

> **Animation explains state, relationship or hierarchy. It never decorates.**

I'd mainly use:

**Draw line**

for diagrams.

**Fade + translate 8–16 px**

for element entrance.

**Progress line**

for processes.

**Node highlight**

for decisions.

**Border transition**

for cards.

**Arrow movement 4 px**

for links.

Nothing more.

There's no reason to use:

* animated counters;
* blobs;
* particles;
* rotations;
* unnecessary horizontal scroll;
* autoplay videos;
* 3D;
* WebGL.

Just because you can build it doesn't mean you should show it off.

In fact, **not doing it is consistent with the brand's own thesis**.

---

# 22. Tone and voice

Your manual already defines this very well. 

I'd translate it into four rules for the whole website.

## 1. Calm

Never:

> "Your software is destroying your business."

Yes:

> "A system can keep working and become a constraint at the same time."

---

## 2. Specific

Never:

> "I build scalable digital solutions."

Yes:

> "I help you decide what's worth changing, what can wait and what shouldn't be touched yet."

---

## 3. Judgment before authority

Never:

> "I'm an expert in highly scalable enterprise architectures."

Yes:

> "A more sophisticated architecture isn't always a better architecture."

---

## 4. First person

Not:

> "Our team works…"

Yes:

> "I work with you…"

> "My recommendation…"

> "I can step in…"

It's a personal brand and it makes sense to take advantage of that. 

---

# 23. A copy device I'd use throughout the page

A recurring structure:

**Not X. Y.**

For example:

> Not more architecture. **Better architecture.**

> Not more software. **Better decisions.**

> Not building everything. **Building what matters.**

> Not replacing the team. **Increasing its capacity to decide.**

> Not eliminating every risk. **Knowing which ones we're accepting.**

But in moderation.

Two or three times across the whole page.

Don't turn it into a gimmick.

---

# 24. Mobile

I wouldn't design mobile as a compressed version of desktop.

I'd change some concepts.

The hero diagram becomes horizontally simplified.

The three cards turn into a vertical sequence.

Complex diagrams become small linear representations.

The process lines turn into a vertical timeline.

The nav is reduced to:

**logo + CTA + menu**

And after a certain amount of scrolling:

**Let's talk for 30 minutes →**

as a sticky bottom CTA.

On a phone it's especially important that the button lets people book in **at most two interactions**.

---

# 25. Speed and experience

For this brand, performance also communicates technical quality.

The site should be extremely fast.

I wouldn't load:

* background video;
* giant animation libraries;
* dozens of fonts;
* unnecessary JavaScript;
* 5 MB images.

Ideally most of the diagrams would be SVG.

The website should feel immediate.

That detail also has an interesting consequence:

**the landing page itself quietly becomes evidence of your technical judgment.**

---

# 26. The final page, visually

The full experience should alternate:

**Porcelain / lots of air**

↓

**diagram**

↓

**Carbon / strong concept**

↓

**Porcelain / services**

↓

**visual architecture**

↓

**cases**

↓

**human presence**

↓

**dark final CTA**

And it would end with a Carbon section taking up almost the whole viewport:

### FIRST CONVERSATION

# Tell me what's going on.

Short text.

**[Let's talk for 30 minutes →]**

`30 MIN · FREE · NOT A SUBSTITUTE FOR AN ADVISORY SESSION`

With no other element competing.

---

# 27. What I want a prospect to feel

If we do this well, the psychological sequence should be:

**First 5 seconds**

"This is about decisions, not just programming."

**15 seconds**

"One of these problems looks a lot like mine."

**30–60 seconds**

"He understands how to think through this kind of situation."

**2 minutes**

"He seems senior and pragmatic, not someone who's going to try to sell me a rewrite."

**End**

"It's worth having a conversation."

That's the real funnel.

---

## My recommendation for the landing page's overall identity

I wouldn't try to compete visually with tech consultancies by showing more technology.

I'd do exactly the opposite.

**Lots of space.
Very few words per screen.
Diagrams instead of illustrations.
Problems instead of features.
Decisions instead of technologies.
A single visually dominant action.**

And I'd use three words as a cross-cutting conceptual system:

**PROBLEM → DECISION → DIRECTION**

Those three ideas can appear in diagrams, animations, cases, process and content, and become almost a second language of the brand.

That way the site doesn't just *say* that you offer clarity before complexity.

**The very experience of navigating it proves it.** 
