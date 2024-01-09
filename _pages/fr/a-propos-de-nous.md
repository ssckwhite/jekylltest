---
altLangPrefix: about-us
description: 
  fr: Ceci est juste une autre page
lang: fr
title: À propos de nous
---

<div class="row">
  <div class="col-md-6">
    Here is some text that will flow around the image that is floated to the right.
  </div>
  <div class="col-md-3">
    <img src="/assets/images/it-workers.png" alt="IT workers" class="img-responsive" />
  </div>
</div>


## Meet the team

### Business Unit

The Business Unit oversees the cloud experimentation program, including IM/IT tooling, reporting, procurement, and FinOps.

<div class="row wb-eqht">
  {% for member in site.data.staff.business %}
    {% include staffpanel.html %}
  {% endfor %}
</div>


### Cloud Experimentation Evolution team

The Cloud Experimentation Evolution Team offers expert cloud advisory services, encompassing application optimization, cloud-native infrastructure development, and tailored advice based on client skillset maturity.

<div class="row wb-eqht">
  {% for member in site.data.staff.evo %}
    {% include staffpanel.html %}
  {% endfor %}
</div>


### The AI for Science team

The AI for Science team manages the CanChat for Science pilot and investigates AI's potential for enhancing scientific research IT services, in partnership with SSC's AI Program.

### Operations team

<div class="row wb-eqht">
  {% for member in site.data.staff.ops %}
    {% include staffpanel.html %}
  {% endfor %}
</div>