---
title: "Jekyll: the Confusing Parts for Non-Programmers"
---

I love [Jekyll](http://jekyllrb.com/). I've been using it since version `0.11`, before there were [million other static site generators](http://staticsitegenerators.net/). I love it so much that I bought [a sticker on Stickermule](http://www.stickermule.com/marketplace/825-jekyll-stickers). Of course, this blog is [powered by Jekyll](https://github.com/chibicode/chibicode-new).

Recently, I've been helping my [girlfriend](http://twitter.com/ellekasai) develop a new Jekyll theme. She currently works as a designer in Tokyo and hasn't done much coding besides HTML, CSS, and some jQuery. I taught her basics of Jekyll [a year ago](http://chibicode.com/teaching-code-hardware-problem/), and although she had built a [Jekyll theme](https://github.com/ellekasai/shinayaka) then, she has forgot many of the little details.

<!--more-->

![](/assets/images/jekyll-confusing-parts-non-programmers/stickers.jpg)

## Page v.s. Post: Which variable to use?

As a review exercise, I asked her to iterate over all posts and display their excerpt. She went through her old code and found that {% raw %}`{% for post in site.posts %}`{% endraw %} might do part of the job. She also read the [documentation](http://jekyllrb.com/docs/variables/#page-variables) and discovered `page.excerpt`:

![](/assets/images/jekyll-confusing-parts-non-programmers/documentation.png)

So she wrote:

{% raw %}
```
{% for post in site.posts %}
  {{ page.excerpt }}
{% endfor %}
```
{% endraw %}

We programmers immediately know that this is incorrect. It should be `post.excerpt` and not `page.excerpt`, since the `for` loop assigns `post` as the iterator variable.

I corrected, but the fix didn't seem to make much sense for her.

At first, I thought it's because she had no experience in a language that uses iterators. But after some introspection, I understood why her mental model was constructed the way it is. And it had more to do with how Jekyll was designed.

## Debugging her mental model

First, Jekyll automatically makes available the `page` variable, which contains the information about the current page (e.g. `page.url`). In other words, what a `page` variable holds *varies* depending on what the current *context* is. In this case, the current page affected the context.

This made her think *conversely* that, all she needs to do is to keep track of what the current context is, and that she does *not* need to worry about using variables other than `page`.

[The documentation](http://jekyllrb.com/docs/variables/#page-variables) *enforced* her view because it kept using the `page` variable. To her, `page` was the only available variable that had anything to do with page data.

![](/assets/images/jekyll-confusing-parts-non-programmers/documentation2.png)

So when she wrote this:

{% raw %}
```
{% for post in site.posts %}
  {{ page.excerpt }}
{% endfor %}
```
{% endraw %}

She thought that the *context had changed* inside the `for` loop, and therefore what `page` variable points to had changed, from the current page to each individual post.

But in Jekyll, the context doesn't change inside a `for` loop. It only changes when the current page changes. Instead, the `for` loop created a `post` variable, which contains the information about each page on each iteration.

She didn't realize this was the case because again, when she looked at the [documentation](http://jekyllrb.com/docs/variables/#page-variables), all she saw was a list of `page.blah`s. To her, a call like `post.blah` was unimaginable, and it was *more feasible* for her to think that the context had changed, allowing `page.blah` to do what she had intended.

This illustrates the **[path of least resistance](http://en.wikipedia.org/wiki/Path_of_least_resistance)**, applied to mental models.

On a side note, she could have written the `for` loop like this, and it would have worked:

{% raw %}
```
{% for page in site.posts %}
  {{ page.excerpt }}
{% endfor %}
```
{% endraw %}

However, if she wanted to access the *original* `page` variable inside the `for` loop, she's out of luck. The `page` variable declared in the `for` loop shadows the original `page` variable. That's why I taught her to use `for post in ...` instead of `for page in ...` in the first place.

## Conclusion

I don't really know how to improve the documentation to prevent this kind of an error for beginning programmers using Jekyll. Maybe there's no need to, and we can say that Jekyll is mostly for savvy programmers [1].

But I think we ought to lower the barrier for design-minded people to play with Jekyll and ultimately create great themes. We have [jekyllthemes.org](http://jekyllthemes.org/), but the quality is not at the level of Wordpress or Tumblr themes yet. There's definitely a room for improvement.

<a href="https://news.ycombinator.com/submit" class="hn-button" data-title="Jekyll: the Confusing Parts for Non-Programmers" data-url="http://chibicode.com/jekyll-confusing-parts-non-programmers/" data-count="horizontal" data-style="twitter">Vote on Hacker News</a>

---

1. Ghost's founder had used the phrase "even more complicated [than Wordpress]" to describe Jekyll in his [Kickstarter video](https://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform).
