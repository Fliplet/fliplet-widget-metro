this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.panels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"size","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "Small";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"panel panel-default\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"panel-heading ui-sortable-handle\">\r\n    <h4 class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n      <div class=\"screen-reorder-handle\">\r\n        <i class=\"fa fa-ellipsis-v\"></i><i class=\"fa fa-ellipsis-v\"></i>\r\n      </div>\r\n      <span class=\"fa fa-chevron-down\"></span>\r\n      <span class=\"panel-title-text\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </h4>\r\n    <a href=\"#\"><span class=\"icon-delete fa fa-trash\"></span></a>\r\n  </div>\r\n  <div id=\"collapse-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse in\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"form-horizontal\">\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-4 control-label\">\r\n            <label for=\"list-item-title-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Title</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <input type=\"text\" class=\"form-control list-item-title\" id=\"list-item-title-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"list-item-title-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Enter title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-4 control-label\">\r\n            <label for=\"list-item-desc-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Description</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <textarea class=\"form-control list-item-desc\" id=\"list-item-desc-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"list-item-desc-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Enter description\" rows=\"2\"></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group clearfix\">\r\n          <div class=\"col-sm-4 control-label\">\r\n            <label for=\"list-item-size-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Panel size</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <label for=\"list-item-size-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"select-proxy-display\">\r\n              <select name=\"panelSize-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"list-item-size-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-label=\"select\" class=\"hidden-select form-control panel-size\">\r\n                <option value=\"Small\">Small</option>\r\n                <option value=\"Medium\">Medium</option>\r\n                <option value=\"Large\">Large</option>\r\n              </select>\r\n              <span class=\"icon fa fa-chevron-down\"></span>\r\n              <span class=\"select-value-proxy\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.size : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"add-link\"></div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <p class=\"help-block\">Adding an image will override the chosen colour. However if the image has transparency, the colour will be shown underneath.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-4 control-label\">\r\n            <label for=\"list-item-image-mpsK94eK\">Image</label>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"add-image-holder \">\r\n              <div class=\"btn btn-default list-item-set-image add-image\">Add Image</div>\r\n              <div class=\"thumb-holder hidden\">\r\n                <div class=\"thumb-image\"><img src=\"\" /></div>\r\n                <div class=\"btn btn-link text-danger image-remove\">Remove Image</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"list-item-image\"></div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});