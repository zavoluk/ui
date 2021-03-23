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
var styled_components_1 = __importDefault(require("styled-components"));
var Collapsible = function (_a) {
    var children = _a.children, header = _a.header, open = _a.open, rest = __rest(_a, ["children", "header", "open"]);
    var _b = react_1.useState(open !== null && open !== void 0 ? open : false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState(0), maxHeight = _c[0], setMaxHeight = _c[1];
    var ref = react_1.createRef();
    var handleClick = function () {
        setIsOpen(function (isOpen) { return !isOpen; });
    };
    react_1.useEffect(function () {
        if (ref.current)
            setMaxHeight(ref.current.scrollHeight);
    }, [children]);
    react_1.useEffect(function () {
        setIsOpen(!!open);
    }, [open]);
    return (react_1.default.createElement(Wrapper, null,
        react_1.isValidElement(header) && react_1.cloneElement(header, { onClick: handleClick }),
        react_1.default.createElement(Content, __assign({}, rest, { open: isOpen, ref: ref, maxHeight: maxHeight }), children)));
};
exports.default = Collapsible;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-height: ", ";\n    opacity: ", ";\n    pointer-events: ", ";\n    transition: max-height ", ",\n        opacity ", ";\n"], ["\n    max-height: ", ";\n    opacity: ", ";\n    pointer-events: ", ";\n    transition: max-height ", ",\n        opacity ", ";\n"])), function (_a) {
    var maxHeight = _a.maxHeight, open = _a.open;
    return (open ? maxHeight + "px" : '0');
}, function (_a) {
    var open = _a.open;
    return (open ? '1' : '0');
}, function (_a) {
    var open = _a.open;
    return (open ? 'auto' : 'none');
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
});
var templateObject_1, templateObject_2;
