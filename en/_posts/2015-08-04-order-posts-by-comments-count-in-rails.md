---
title: Order Posts by Comments Count in Rails
---

- A post `has_many` comments
- We want the list of posts, sorted by the number of comments (in descending order)
- Do this in Rails without using counter cache

I forget how to do this all the time, so here it is:

```
Post
  .joins(:comments)
  .group("posts.id")
  .order("count(comments.id) desc")
```

In SQL, this would be:

```
SELECT "posts".*
FROM "posts"
INNER JOIN "comments"
  ON "comments"."post_id" = "posts"."id"
GROUP BY posts.id
ORDER BY count(comments.id) DESC
```

Inspired by an excellent article called "[Blog Little Things](http://coffeecoder.net/blog/blog-little-things/)."
