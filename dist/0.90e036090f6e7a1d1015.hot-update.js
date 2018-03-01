webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Listing = function (_Component) {\n  _inherits(Listing, _Component);\n\n  function Listing(props) {\n    _classCallCheck(this, Listing);\n\n    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));\n\n    _this.state = {\n      userid: window.localStorage.getItem('userid'),\n      posts: []\n    };\n    return _this;\n  }\n\n  _createClass(Listing, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('/api/getmyposts', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.setState({ posts: json.posts });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        function (e) {}(),\n        _react2.default.createElement(\n          'div',\n          { className: 'well' },\n          _react2.default.createElement(\n            'h4',\n            { className: 'media-heading' },\n            'Receta 1'\n          ),\n          _react2.default.createElement(\n            'p',\n            { className: 'text-right' },\n            'By Francisco'\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.'\n          ),\n          _react2.default.createElement(\n            'ul',\n            { className: 'list-inline list-unstyled' },\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement('i', { className: 'glyphicon glyphicon-calendar' }),\n                ' 2 days, 8 hours '\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            _react2.default.createElement(\n              'span',\n              null,\n              _react2.default.createElement('i', { className: 'glyphicon glyphicon-comment' }),\n              ' 2 comments'\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n              _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' })\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'glyphicon glyphicon-tags' },\n                '\\xA0'\n              ),\n              'Tags : ',\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                ' ',\n                _react2.default.createElement(\n                  'span',\n                  { className: 'label label-info' },\n                  'Snipp'\n                )\n              ),\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                ' ',\n                _react2.default.createElement(\n                  'span',\n                  { className: 'label label-info' },\n                  'Bootstrap'\n                )\n              ),\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                ' ',\n                _react2.default.createElement(\n                  'span',\n                  { className: 'label label-info' },\n                  ' UI'\n                )\n              ),\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                ' ',\n                _react2.default.createElement(\n                  'span',\n                  { className: 'label label-info' },\n                  'growth'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Listing;\n}(_react.Component);\n\nexports.default = Listing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcuanM/MGM0NSJdLCJuYW1lcyI6WyJMaXN0aW5nIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJpZCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0cyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUNNQSxPOzs7QUFFSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUUMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FERztBQUVYQyxhQUFNO0FBRkssS0FBYjtBQUZpQjtBQU1sQjs7Ozt3Q0FHb0I7QUFBQTs7QUFDbkJDLFlBQU8saUJBQVAsRUFBMEIsRUFBQ0MsUUFBUSxNQUFULEVBQWlCQyxTQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUExQixFQUFnRUMsTUFBTUMsS0FBS0MsU0FBTCxDQUFnQixLQUFLWCxLQUFyQixDQUF0RSxFQUExQixFQUNHWSxJQURILENBQ1M7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQURULEVBRUdGLElBRkgsQ0FFUyxnQkFBUTtBQUNiLGVBQUtHLFFBQUwsQ0FBYyxFQUFDVixPQUFNUyxLQUFLVCxLQUFaLEVBQWQ7QUFDRCxPQUpIO0FBTUQ7Ozs2QkFHVTtBQUNULGFBQ0U7QUFBQTtBQUFBO0FBRUUsa0JBQUNXLENBQUQsRUFBSyxDQUVOLENBRkEsRUFGRDtBQXdCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFDTTtBQUFBO0FBQUEsY0FBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLFdBRE47QUFFTTtBQUFBO0FBQUEsY0FBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLFdBRk47QUFHTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSE47QUFPTTtBQUFBO0FBQUEsY0FBSSxXQUFVLDJCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQU0scURBQUcsV0FBVSw4QkFBYixHQUFOO0FBQUE7QUFBQTtBQUFKLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBTSxtREFBRyxXQUFVLDZCQUFiLEdBQU47QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUE7QUFDRSxzREFBTSxXQUFVLDBCQUFoQixHQURGO0FBRUUsc0RBQU0sV0FBVSwwQkFBaEIsR0FGRjtBQUdFLHNEQUFNLFdBQVUsMEJBQWhCLEdBSEY7QUFJRSxzREFBTSxXQUFVLDBCQUFoQixHQUpGO0FBS0Usc0RBQU0sV0FBVSxnQ0FBaEI7QUFMRixhQUxGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFNLFdBQVUsMEJBQWhCO0FBQUE7QUFBQSxlQUFKO0FBQUE7QUFDUztBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBYTtBQUFBO0FBQUEsb0JBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBO0FBQWIsZUFEVDtBQUVJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFhO0FBQUE7QUFBQSxvQkFBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUE7QUFBYixlQUZKO0FBR0k7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQWE7QUFBQTtBQUFBLG9CQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUFiLGVBSEo7QUFJSTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBYTtBQUFBO0FBQUEsb0JBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBO0FBQWI7QUFKSjtBQWJGO0FBUE47QUF4QkYsT0FERjtBQXlERDs7Ozs7O2tCQUlZbEIsTyIsImZpbGUiOiIyNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5jbGFzcyBMaXN0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJpZDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyksXG4gICAgICBwb3N0czpbXVxuICAgIH07XG4gIH07XG4gIFxuICBcbiAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoICgnL2FwaS9nZXRteXBvc3RzJywge21ldGhvZDogJ3Bvc3QnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh0aGlzLnN0YXRlKX0pXG4gICAgICAudGhlbiAocmVzID0+IHJlcy5qc29uICgpKVxuICAgICAgLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3N0czpqc29uLnBvc3RzfSk7XG4gICAgICB9KTtcbiAgICAgXG4gIH1cbiAgXG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIFxuICAgICAgeygoZSk9PntcbiAgICAgICAgXG4gICAgICB9KSgpfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPlJlY2V0YSAxPC9oND5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPkJ5IEZyYW5jaXNjbzwvcD5cbiAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRHVpcyBwaGFyZXRyYSB2YXJpdXMgcXVhbSBzaXQgYW1ldCB2dWxwdXRhdGUuIFxuICAgICAgICAgICAgICAgIFF1aXNxdWUgbWF1cmlzIGF1Z3VlLCBtb2xlc3RpZSB0aW5jaWR1bnQgY29uZGltZW50dW0gdml0YWUsIGdyYXZpZGEgYSBsaWJlcm8uIEFlbmVhbiBzaXQgYW1ldCBmZWxpcyBcbiAgICAgICAgICAgICAgICBkb2xvciwgaW4gc2FnaXR0aXMgbmlzaS4gU2VkIGFjIG9yY2kgcXVpcyB0b3J0b3IgaW1wZXJkaWV0IHZlbmVuYXRpcy4gRHVpcyBlbGVtZW50dW0gYXVjdG9yIGFjY3Vtc2FuLiBcbiAgICAgICAgICAgICAgICBBbGlxdWFtIGluIGZlbGlzIHNpdCBhbWV0IGF1Z3VlLjwvcD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIGxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclwiPjwvaT4gMiBkYXlzLCA4IGhvdXJzIDwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT58PC9saT5cbiAgICAgICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvbW1lbnRcIj48L2k+IDIgY29tbWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGxpPnw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3Rhci1lbXB0eVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT58PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10YWdzXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgVGFncyA6IDxhIGhyZWY9XCIjXCI+IDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLWluZm9cIj5TbmlwcDwvc3Bhbj48L2E+IFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1pbmZvXCI+Qm9vdHN0cmFwPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4gPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtaW5mb1wiPiBVSTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLWluZm9cIj5ncm93dGg8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICBcbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL215cG9zdC9saXN0aW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})