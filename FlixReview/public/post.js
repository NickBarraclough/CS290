(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":39}}}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":60}}}) : helper)))
    + "\" data-url=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":1,"column":72},"end":{"line":1,"column":84}}}) : helper)))
    + "\" data-rating=\""
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":1,"column":99},"end":{"line":1,"column":109}}}) : helper)))
    + "\" data-genre=\""
    + alias4(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre","hash":{},"data":data,"loc":{"start":{"line":1,"column":123},"end":{"line":1,"column":132}}}) : helper)))
    + "\" data-review=\""
    + alias4(((helper = (helper = helpers.review || (depth0 != null ? depth0.review : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"review","hash":{},"data":data,"loc":{"start":{"line":1,"column":147},"end":{"line":1,"column":157}}}) : helper)))
    + "\">\n	<div class=\"post-contents\">\n		<div class=\"post-image-container\">\n			<img class=\"title-img\" src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":43}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":59}}}) : helper)))
    + " title image\">\n		</div>\n		<div class=\"post-info-container\">\n			<span class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":23},"end":{"line":7,"column":32}}}) : helper)))
    + "</span>\n			<span class=\"rating\">"
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":8,"column":24},"end":{"line":8,"column":34}}}) : helper)))
    + "</span>\n			<span class=\"review\">"
    + alias4(((helper = (helper = helpers.review || (depth0 != null ? depth0.review : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"review","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":34}}}) : helper)))
    + "</span>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();