/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/project-logali/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
