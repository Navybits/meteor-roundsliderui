Package.describe({
  name: 'navybits:roundsliderui',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A jQuery round slider based on http://roundsliderui.com/ packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Navybits/meteor-roundsliderui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery','client');
  api.addFiles('roundslider.min.js','client');
  api.addFiles('roundslider.min.css','client');
});
