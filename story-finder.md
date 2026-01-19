---
layout: page
title: Story Finder
slug: story-finder
---
## Story Finder
<a class="anchortop" id="top"></a>In the mood for something specific?
{% assign parents = 'free,new-adult,young-adult,heat-level,tropes,setting,time-period,holiday,paranormal-romance' | split: "," %}
<ul class="actions">
	{% for parent in parents %}<li><a href="#{{ parent }}" class="button">{{ parent | replace: "-", " " | capitalize }}</a></li>{% endfor %}
	<li><a href="/short-stories/" class="button">Short Stories</a></li>
	<li><a href="/collections/" class="button">Collections</a></li>
</ul>
{% for parent in parents %}
-----
<a class="anchor" id="{{ parent }}"></a>
#### {{ parent | replace: "-", " " | capitalize | replace: "<p>", "" | replace: "</p>", "" }}
{% case parent %}
	{% when 'heat-level' %}{% assign child_tags = '2-kisses-only,3-mildly-spicy' %}
	{% when 'tropes' %}{% assign child_tags = 'best-friends-brother,different-sides-of-the-tracks,fake-dating,friends-to-lovers,musicians,wedding,second-chance-romance,opposites-attract,love-at-first-sight,sunshine-grump' %}
	{% when 'setting' %}{% assign child_tags = 'carreen,hillingham-hollow,vintage-meadow-lake' %}
	{% when 'time-period' %}{% assign child_tags = 'contemporary,1990s' %}
	{% when 'holiday' %}{% assign child_tags = 'christmas,halloween,thanksgiving,valentines-day' %}
	{% when 'paranormal-romance' %}{% assign child_tags = 'magic,vampires,witches' %}
	{% else %}{% assign child_tags = parent %}
{% endcase %}
{% assign children = child_tags | split: ',' %}
{% if children.size > 1 %}
##### {% for child in children %}[{{ child  | replace: "-", " " | replace: "valentines", "valentine's" | replace: "best friends", "best friend's" | replace: "sunshine grump", "sunshine/grump" | replace: "2 k", "2 - k" | replace: "3 m", "3 - m" | capitalize }}](#{{ child }}){% if forloop.last == false %} | {% endif %}{% endfor %}
{% endif %}
{% include story-finder-tag-block.html tags=child_tags parent='parent' %}
{% endfor %}
