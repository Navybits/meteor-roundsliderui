# meteor-roundsliderui
A jQuery round slider based on http://roundsliderui.com/ packaged for Meteor
Usage Example:
In a template, for example index.html:
```html
<div id="slider"></div>
```
in a template helper:
```javascript
Template.index.onRendered(function () {
    $("#slider").roundSlider({
        sliderType: "min-range",
        handleShape: "round",
        width: 22,
        radius: 100,
        value: 50
    });
});
```
For more usage details, check the original jquery plugin documentation at : http://roundsliderui.com/

