angular.module('color.picker').run(['$templateCache', function($templateCache) {
    $templateCache.put('template/color-picker/directive.html',
        '<div class="color-picker-wrapper" ng-class="{\'color-picker-swatch-only\': config.swatchOnly}">\n' +
        '   <div>\n' +
        '       <span ng-if="config.swatchPos === \'left\'" ng-attr-style="background-color: {{swatchColor}};" class="color-picker-swatch" ng-click="focus()" ng-show="config.swatch" ng-class="{\'color-picker-swatch-left\': config.swatchPos !== \'right\', \'color-picker-swatch-right\': config.swatchPos === \'right\'}"></span>\n' +
        '       <input class="color-picker-input" type="text" ng-model="ngModel" ng-change="onChange($event)" size="7" ng-focus="show()" ng-class="{\'color-picker-input-swatch\': config.swatch && !config.swatchOnly && config.swatchPos === \'left\'}">\n' +
        '       <span ng-if="config.swatchPos === \'right\'" ng-attr-style="background-color: {{swatchColor}};" class="color-picker-swatch" ng-click="focus()" ng-show="config.swatch" ng-class="{\'color-picker-swatch-left\': config.swatchPos !== \'right\', \'color-picker-swatch-right\': config.swatchPos === \'right\'}"></span>\n' +
        '   </div>\n' +
        '   <div class="color-picker-panel" ng-show="visible" ng-class="{\n' +
        '       \'color-picker-panel-top color-picker-panel-right\': config.pos === \'top right\',\n' +
        '       \'color-picker-panel-top color-picker-panel-left\': config.pos === \'top left\',\n' +
        '       \'color-picker-panel-bottom color-picker-panel-right\': config.pos === \'bottom right\',\n' +
        '       \'color-picker-panel-bottom color-picker-panel-left\': config.pos === \'bottom left\',\n' +
        '   }">\n' +
        '       <div class="color-picker-hue color-picker-sprite">\n' +
        '           <div class="color-picker-slider" ng-attr-style="top: {{huePos}}%;"></div>\n' +
        '       </div>\n' +
        '       <div class="color-picker-opacity color-picker-sprite" ng-show="config.alpha">\n' +
        '           <div class="color-picker-slider" ng-attr-style="top: {{opacityPos}}%;"></div>\n' +
        '           </div>\n' +
        '       <div class="color-picker-grid color-picker-sprite" ng-attr-style="background-color: {{grid}};">\n' +
        '           <div class="color-picker-grid-inner"></div>\n' +
        '           <div class="color-picker-picker" ng-attr-style="top: {{lightnessPos}}%; left: {{saturationPos}}%;">\n' +
        '               <div></div>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>\n' +
        '</div>'
    );

}]);
