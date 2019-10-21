'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description() {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'p',
            null,
            'This is a really basic SSR React app'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Using:'
        ),
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Express JS'
            ),
            _react2.default.createElement(
                'li',
                null,
                'EJS'
            ),
            _react2.default.createElement(
                'li',
                null,
                'React 16'
            ),
            _react2.default.createElement(
                'li',
                null,
                'React Dom 16'
            ),
            _react2.default.createElement(
                'li',
                null,
                'babel-cli 6'
            ),
            _react2.default.createElement(
                'li',
                null,
                'babel-core 6'
            ),
            _react2.default.createElement(
                'li',
                null,
                'babel-loader 7'
            ),
            _react2.default.createElement(
                'li',
                null,
                'babel-preset-env 1'
            ),
            _react2.default.createElement(
                'li',
                null,
                'babel-preset-react 6'
            ),
            _react2.default.createElement(
                'li',
                null,
                'webpack 4'
            ),
            _react2.default.createElement(
                'li',
                null,
                'webpack-cli 3'
            )
        )
    );
};

exports.default = Description;