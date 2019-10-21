'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _description = require('../description');

var _description2 = _interopRequireDefault(_description);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'App'
        ),
        _react2.default.createElement(_description2.default, null)
    );
};

exports.default = App;