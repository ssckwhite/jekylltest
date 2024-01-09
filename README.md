# jekylltest
This is an early development version of our team's website.

It is based on the [Jekyll variant](https://github.com/wet-boew/gcweb-jekyll) of [WET-BOEW](https://wet-boew.github.io/). Unfortunately the recent-looking commits to that project are misleading as it's just a bot pushing empty commits, but I've been able to bend the code to my will so far :D.

New pages should be created in `_pages/en/` and `_pages/fr/`, with the *front matter* including a `altLangPrefix` key to point at the other OL page. To generate the menu, it's also obligatory to include a `title`; a minimal page template could look like:
```markdown
---
altLangPrefix: a-propos-de-nous
authorName: Service Canada
authorUrl:
title: About us
dateModified: 2024-01-04
description:
  en: "Get quick, easy access to all Government of Canada services and information."
  fr: "Accédez rapidement et facilement à tous les services et renseignements du gouvernement du Canada."
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Test page - Canada.ca
---

<div class="row">
  <div class="col-md-6">
    We're a small innovative team focused on providing science research timely access to an exclusive set of secure environments & solutions where modern & innovative methods to doing science can be discovered with cutting-edge cloud technologies, supported by dedicated expert advisory services working across multiple cloud providers.
  </div>
  <div class="col-md-6">
    <img src="/assets/images/it-workers.png" alt="IT workers" class="img-responsive" />
  </div>
</div>
```

Although using Markdown where possible is better than HTML (for readability of the source, and minimizing refactor), you can of course include HTML in the file.