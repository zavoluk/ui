"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
var Input = function (props) {
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(InputStyled, __assign({}, props))));
};
exports.default = Input;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n"], ["\n    display: inline-block;\n"])));
var InputStyled = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: 0.5rem 1rem;\n    transition: border-color ", ";\n    &:hover {\n        border-color: ", ";\n    }\n    &::placeholder {\n        color: ", ";\n        transition: color ", ";\n    }\n    &:focus {\n        border-color: ", ";\n        outline: none;\n        &::placeholder {\n            color: ", ";\n        }\n    }\n    &:disabled {\n        background-color: white;\n        cursor: not-allowed;\n        opacity: 0.5;\n    }\n"], ["\n    border: 1px solid ", ";\n    border-radius: ", ";\n    padding: 0.5rem 1rem;\n    transition: border-color ", ";\n    &:hover {\n        border-color: ", ";\n    }\n    &::placeholder {\n        color: ", ";\n        transition: color ", ";\n    }\n    &:focus {\n        border-color: ", ";\n        outline: none;\n        &::placeholder {\n            color: ", ";\n        }\n    }\n    &:disabled {\n        background-color: white;\n        cursor: not-allowed;\n        opacity: 0.5;\n    }\n"])), function (props) { return props.theme.colors.primary; }, function (props) { return props.theme.borderRadius; }, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.8, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.15, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.95, theme.colors.primary);
});
var templateObject_1, templateObject_2;
