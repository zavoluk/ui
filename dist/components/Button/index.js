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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var polished_1 = require("polished");
var styled_components_1 = __importDefault(require("styled-components"));
var Button = function (props) {
    var onClick = props.onClick, _a = props.type, type = _a === void 0 ? 'button' : _a, rest = __rest(props, ["onClick", "type"]);
    var clickHandler = react_1.useCallback(function (e) {
        var event = e;
        if (onClick)
            onClick(event);
    }, [onClick]);
    return (react_1.default.createElement(Wrapper, __assign({ type: type, onClick: clickHandler, tabIndex: 0 }, rest),
        react_1.default.createElement("span", { tabIndex: -1 }, props.children)));
};
exports.default = Button;
var Wrapper = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: transparent;\n    border: none;\n    color: white;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    &:hover {\n        & > span {\n            background-color: ", ";\n            border-color: ", ";\n        }\n    }\n    &:focus {\n        outline: none;\n        & > span {\n            box-shadow: 0 0 10px -2px ", ";\n        }\n    }\n    &:active {\n        & > span {\n            background-color: ", ";\n            border-color: ", ";\n        }\n    }\n    &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n    }\n    & > span {\n        background-color: ", ";\n        border: 1px solid ", ";\n        border-radius: ", ";\n        display: inline-block;\n        outline: none;\n        padding: 0.5rem 1rem;\n        transition: background-color ", ",\n            border-color ", ";\n    }\n"], ["\n    background-color: transparent;\n    border: none;\n    color: white;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    &:hover {\n        & > span {\n            background-color: ", ";\n            border-color: ", ";\n        }\n    }\n    &:focus {\n        outline: none;\n        & > span {\n            box-shadow: 0 0 10px -2px ", ";\n        }\n    }\n    &:active {\n        & > span {\n            background-color: ", ";\n            border-color: ", ";\n        }\n    }\n    &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n    }\n    & > span {\n        background-color: ", ";\n        border: 1px solid ", ";\n        border-radius: ", ";\n        display: inline-block;\n        outline: none;\n        padding: 0.5rem 1rem;\n        transition: background-color ", ",\n            border-color ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.05, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.15, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.15, theme.colors.primary);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
});
var templateObject_1;
