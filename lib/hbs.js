define(["handlebars"], function (Handlebars) {
  Handlebars = Handlebars || this.Handlebars;
  var templateExtension = ".hbs";

  return {

    pluginBuilder: "./hbs-builder",

    load: function (name, parentRequire, onload, config) {

      var ext = (config.hbs && config.hbs.templateExtension ? config.hbs.templateExtension : templateExtension);

      parentRequire(["text!" + name + ext], function (raw) {
        onload(Handlebars.compile(raw));
      });

    }

  };
});
