---
title: "Don't Use \"send\" as an ActionMailer Method Name"
---

When using Rails 4, I had this strange error in `ActionMailer` where the parameters being passed to one of the mailer methods became a string called `_process_action_callbacks`. There was zero Google result, and it took me a while to figure this out.

It turns out that I was naming one of the ActionMailer methods as `send`:

<div data-gist-id="a9b66bad5a5b08828dd9" data-gist-file="send.rb"></div>

Of course, [`send` is a special method in Ruby](http://ruby-doc.org/core-2.2.2/Object.html#method-i-send), and I was overwriting it. But I didn't see this immediately because the error string `_process_action_callbacks` was being generated somewhere from `AbstractController`. I also compmletely forgot that mailer methods should be nouns and not verbs.

### Side Note on Sidekiq

I also got stuck because I was passing symbols to a Sidekiq worker. Sidekiq converts symbols into strings:

<div data-gist-id="a9b66bad5a5b08828dd9" data-gist-file="sidekiq.rb"></div>

This was [documented on the wiki](https://github.com/mperham/sidekiq/wiki/Best-Practices#1-make-your-job-parameters-small-and-simple), but I never read it. The wiki actually has a lot of tips, including [the configuration options](https://github.com/mperham/sidekiq/wiki/Advanced-Options), which you'd have to tweak if you're using Sidekiq on Heroku and Redis.

Hope this helps someone. Happy coding!
