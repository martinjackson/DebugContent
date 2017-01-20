'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugContent = function (_Component) {
  _inherits(DebugContent, _Component);

  function DebugContent() {
    _classCallCheck(this, DebugContent);

    return _possibleConstructorReturn(this, (DebugContent.__proto__ || Object.getPrototypeOf(DebugContent)).apply(this, arguments));
  }

  _createClass(DebugContent, [{
    key: 'render',
    value: function render() {
      var obj = this.props.value;
      if (!obj) return _react2.default.createElement('p', null);

      var pretty = function pretty(obj) {
        return typeof obj === 'string' ? obj : JSON.stringify(obj);
      };

      var keys = Object.keys(obj);
      var st = { border: '1px solid #ccc' };

      if (this.props.horizontal) return _react2.default.createElement(
        'table',
        { style: st },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            keys.map(function (k) {
              return _react2.default.createElement(
                'th',
                { key: k },
                k
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            keys.map(function (k) {
              return _react2.default.createElement(
                'td',
                { key: k, style: st },
                pretty(obj[k])
              );
            })
          )
        )
      );else
        // <thead><tr><th>Property</th><th>Value</th></tr></thead>
        return _react2.default.createElement(
          'table',
          { style: st },
          _react2.default.createElement(
            'tbody',
            null,
            keys.map(function (k) {
              return _react2.default.createElement(
                'tr',
                { key: k },
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    k,
                    ':'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  pretty(obj[k])
                )
              );
            })
          )
        );
    }
  }]);

  return DebugContent;
}(_react.Component);

exports.default = DebugContent;
