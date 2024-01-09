---
altLangPrefix: a-propos-de-nous
authorName: Service Canada
authorUrl:
title: About us
#dateModified: 2024-01-04
description:
  en: "Get quick, easy access to all Government of Canada services and information."
  fr: "Accédez rapidement et facilement à tous les services et renseignements du gouvernement du Canada."
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
---

<div class="row">
  <div class="col-md-6 pull-right">
     <div class="mrgn-bttm-md">
      <img src="/assets/images/it-workers.png" alt="IT workers" class="img-responsive" />
     </div>
  </div>
  <div class="mrgn-lft-md mrgn-rght-md">
   <p>We're a small innovative team focused on providing science research timely access to an exclusive set of secure environments & solutions where modern & innovative methods to doing science can be discovered with cutting-edge cloud technologies, supported by dedicated expert advisory services working across multiple cloud providers.</p>

## Meet the team

### Senior staff

<div class="row wb-eqht">
  {% for member in site.data.staff.upperdeck %}
    {% include staffpanel.html %}
  {% endfor %}
</div>

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

### Students

<div class="row wb-eqht">
  {% for member in site.data.staff.students %}
    {% include staffpanel.html %}
  {% endfor %}
</div>

  </div>
</div>