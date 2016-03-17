---
title: "Note to self: How is tachyons different from inline styles?"
---

[@4lpine](https://twitter.com/4lpine) pointed me to a great discussion on GitHub: [How is tachyons different from inline styles?](https://github.com/tachyons-css/tachyons/issues/12#issuecomment-59828967). In particular the author of [tachyons](http://tachyons.io/) said:

> *"You lose the flexibility to change the properties of multiple related elements at the same time:"*
>
> I disagree with this. If it's a known pattern you are trying to change across many pages - that is a text-editing problem in my mind. But even in a single purpose class architecture if you change the class - you also change it everywhere that class is defined. So you can update your spacing scale, or your color palette, or your type scale - and that will propagate everywhere. Those are valuable couplings in my mind - and they are retained in this architecture. Harry Roberts also brings up a good point that if you have a common html pattern on hundreds of pages, **it should most likely be a component that is included within a tempting system.** And you should have to change it in hundreds of places. To me this problem happens way less often than "I need to change 5 things on this interface right now and I am not working on any other part of the site" That is more reflective to me of web development at any large company. Encapsulation is your best friend in that scenario.

The author of Bootstrap then said:

> This is just a different way of doing it though—put it all in the HTML, or put it in the CSS. Or both.

I think before React came out, more people were reusing CSS classes, because HTML reuse was less common (there were Rails partials, but React pushed the idea of componetization further). But now that we're moving to the React world, reusing HTML is becoming much more common, and as long as those HTML components are reusable, it's okay if CSS classes that those HTML components use are not.

## Memo: The Difference between [BassCSS](http://basscss.com/) and [Tachyons](http://tachyons.io/)

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/4lpine">@4lpine</a> what would you say is the difference between tachyons and basscss? i&#39;m currently a basscss user but have no clue if i should switch.</p>&mdash; Shu Uesugi (@chibicode) <a href="https://twitter.com/chibicode/status/693146325735464960">January 29, 2016</a></blockquote>

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/chibicode">@chibicode</a> Same OOCSS philosophy, different approach. Tachyons classes consist of single declarations which make it a bit more flexible …</p>&mdash; John Otander (@4lpine) <a href="https://twitter.com/4lpine/status/693148779483009024">January 29, 2016</a></blockquote>

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/chibicode">@chibicode</a> … And shorter class names that typically have more options. Tachyons takes composability to the extreme …</p>&mdash; John Otander (@4lpine) <a href="https://twitter.com/4lpine/status/693149073017180161">January 29, 2016</a></blockquote>

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/chibicode">@chibicode</a> … That may or may not be good for your use case. I think you can’t go wrong choosing either. Just depends on preferences …</p>&mdash; John Otander (@4lpine) <a href="https://twitter.com/4lpine/status/693149256660561920">January 29, 2016</a></blockquote>

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/chibicode">@chibicode</a> … I found once I learned the naming patterns of Tachyons, I found myself extremely productive using it. And enjoying the flexblty</p>&mdash; John Otander (@4lpine) <a href="https://twitter.com/4lpine/status/693149650568634368">January 29, 2016</a></blockquote>

<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/chibicode">@chibicode</a> A good discussion to read that might be more enlightening than what I can do in 140 chars : )&#10;&#10;<a href="https://t.co/Pb6XowiGPe">https://t.co/Pb6XowiGPe</a></p>&mdash; John Otander (@4lpine) <a href="https://twitter.com/4lpine/status/693149922095312896">January 29, 2016</a></blockquote>

See also: [Building and Shipping Functional CSS](https://blog.colepeters.com/building-and-shipping-functional-css/)
