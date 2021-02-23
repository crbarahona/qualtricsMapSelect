Qualtrics Custom Map Select
====
Selecting spatial regions is a common survey requirement in many social science surveys. Presenting a long list of empty form fields is both ugly and intimidating. Leaflet provides an customizeable interactive map interface that we can leverage within Qualtrics as a visual interface to a multiple choice question using corresponding ids.

The files in this repository are broken up to correspond to where the code should be entered into Qualtrics. If applicable, all code should be entered while using the WYSIWYG editor's "Source" mode.

* server\ - Files here will need to be hosted on an external web-server. This is the leaflet.js application that was created using [QGIS2Web](https://github.com/tomchadwin/qgis2web) 
* api.js - Should entered into the map question's Javascript Editor. https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/. This will likely need to be highly cusotmized to match your leaflet application. 
* header.html - Should be entered into the "Look & Feel" under General -> Header https://www.qualtrics.com/support/survey-platform/survey-module/look-feel/general-look-feel-settings/#AddFooterHeader 
* questionText.html - Should be entered (in "Source" mode) using the question's Rich Content Editor). Update links to reflect path to your hosted leaflet app
* statementText.html - Should be entered in a Multiple Choice, Multiple Answer Choices block - https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/multiple-choice/#Variations

In progress demo at: https://ucdavis.co1.qualtrics.com/jfe/preview/SV_0oYPOitnBIZUtF3
