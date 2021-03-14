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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipPositions = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var TooltipPositions;
(function (TooltipPositions) {
    TooltipPositions["bottom"] = "bottom";
    TooltipPositions["left"] = "left";
    TooltipPositions["right"] = "right";
    TooltipPositions["top"] = "top";
})(TooltipPositions = exports.TooltipPositions || (exports.TooltipPositions = {}));
var indent = '10px';
var Tooltip = function (_a) {
    var children = _a.children, content = _a.content, _b = _a.interactive, interactive = _b === void 0 ? false : _b, isOpen = _a.isOpen, _c = _a.position, position = _c === void 0 ? TooltipPositions.right : _c, rest = __rest(_a, ["children", "content", "interactive", "isOpen", "position"]);
    var isControlled = typeof isOpen !== 'undefined';
    var _d = react_1.useState(!!isOpen), open = _d[0], setOpen = _d[1];
    react_1.useEffect(function () {
        setOpen(!!isOpen);
    }, [isOpen]);
    var handleMouse = react_1.useCallback(function (e) {
        var event = e;
        var isMouseEnter = event.type === 'mouseenter';
        setOpen(isMouseEnter);
    }, []);
    return react_1.cloneElement(children, {
        children: (react_1.default.createElement(react_1.default.Fragment, null,
            children.props.children,
            react_1.default.createElement(Wrapper, { position: position, onMouseEnter: function (e) { return (isControlled ? undefined : handleMouse(e)); }, onMouseLeave: function (e) { return (isControlled ? undefined : handleMouse(e)); } },
                react_1.default.createElement(Content, __assign({ position: position, open: open, interactive: (interactive || isControlled) && open }, rest), content))))
    });
};
exports.default = Tooltip;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    align-items: ", ";\n    display: flex;\n    height: 100%;\n    justify-content: ", ";\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n"], ["\n    align-items: ",
    ";\n    display: flex;\n    height: 100%;\n    justify-content: ",
    ";\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n"])), function (_a) {
    var position = _a.position;
    return position === TooltipPositions.right || position === TooltipPositions.left
        ? 'center'
        : position === TooltipPositions.bottom
            ? 'flex-end'
            : position === TooltipPositions.top
                ? 'flex-start'
                : 'center';
}, function (_a) {
    var position = _a.position;
    return position === TooltipPositions.top || position === TooltipPositions.bottom
        ? 'center'
        : position === TooltipPositions.right
            ? 'flex-end'
            : position === TooltipPositions.left
                ? 'flex-start'
                : 'center';
});
var Content = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    opacity: ", ";\n    padding: ", ";\n    pointer-events: none;\n    transform: ", ";\n    transition: opacity ", ",\n        transform ", ";\n    will-change: opacity, transform;\n    ", "\n"], ["\n    opacity: ", ";\n    padding: ", ";\n    pointer-events: none;\n    transform: ",
    ";\n    transition: opacity ", ",\n        transform ", ";\n    will-change: opacity, transform;\n    ",
    "\n"])), function (_a) {
    var open = _a.open;
    return (open ? 1 : 0);
}, indent, function (_a) {
    var open = _a.open, position = _a.position;
    return position === TooltipPositions.right
        ? "translate(calc(calc(100% - " + indent + ") + " + (open ? indent : '0px') + "), 0)"
        : position === TooltipPositions.left
            ? "translate(calc(calc(-100% - " + indent + ") + " + (open ? indent : '0px') + "), 0)"
            : position === TooltipPositions.top
                ? "translate(0, calc(calc(-100% - " + indent + ") + " + (open ? indent : '0px') + "))"
                : position === TooltipPositions.bottom
                    ? "translate(0, calc(calc(100% - " + indent + ") + " + (open ? indent : '0px') + "))"
                    : 'none';
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
}, function (_a) {
    var theme = _a.theme;
    return theme.animation.transition;
}, function (_a) {
    var interactive = _a.interactive;
    return interactive && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            pointer-events: auto;\n            &:hover {\n                opacity: 1 !important;\n            }\n        "], ["\n            pointer-events: auto;\n            &:hover {\n                opacity: 1 !important;\n            }\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3;
