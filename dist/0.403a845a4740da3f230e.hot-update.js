webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Listing = function (_Component) {\n  _inherits(Listing, _Component);\n\n  function Listing(props) {\n    _classCallCheck(this, Listing);\n\n    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));\n\n    _this.state = {\n      userid: window.localStorage.getItem('userid'),\n      posts: []\n    };\n    return _this;\n  }\n\n  _createClass(Listing, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('/api/getmyposts', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.setState({ posts: json.posts });\n      });\n    }\n  }, {\n    key: 'postlitsing',\n    value: function postlitsing(posts) {\n      var listItems = '';\n      if (posts.length == 0) {\n        listItems = _react2.default.createElement(\n          'div',\n          null,\n          'No record '\n        );\n      } else {\n\n        listItems = posts.forEach(function (obj, k) {\n          console.log(obj);\n          return _react2.default.createElement(\n            'div',\n            { className: 'well' },\n            _react2.default.createElement(\n              'h4',\n              { className: 'media-heading' },\n              obj.title\n            ),\n            _react2.default.createElement(\n              'p',\n              { className: 'text-right' },\n              'By you.'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              obj.body\n            ),\n            _react2.default.createElement(\n              'ul',\n              { className: 'list-inline list-unstyled' },\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'span',\n                  null,\n                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-calendar' }),\n                  new Date(obj.date).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }),\n                  ' '\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement('i', { className: 'glyphicon glyphicon-comment' }),\n                ' 0 comments'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' })\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'span',\n                  { className: 'glyphicon glyphicon-tags' },\n                  '\\xA0'\n                ),\n                'Tags : ',\n                obj.tags\n              )\n            )\n          );\n        });\n      }\n\n      console.log(listItems);\n      return listItems;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        ' ',\n        this.postlitsing(this.state.posts),\n        ' '\n      );\n    }\n  }]);\n\n  return Listing;\n}(_react.Component);\n\nexports.default = Listing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcuanM/MGM0NSJdLCJuYW1lcyI6WyJMaXN0aW5nIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJpZCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0cyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImxpc3RJdGVtcyIsImxlbmd0aCIsImZvckVhY2giLCJvYmoiLCJrIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJob3VyMTIiLCJtaW51dGUiLCJ0YWdzIiwicG9zdGxpdHNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUNNQSxPOzs7QUFFSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUUMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FERztBQUVYQyxhQUFPO0FBRkksS0FBYjtBQUZpQjtBQU1sQjs7Ozt3Q0FFcUI7QUFBQTs7QUFDcEJDLFlBQU8saUJBQVAsRUFBMEIsRUFBQ0MsUUFBUSxNQUFULEVBQWlCQyxTQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUExQixFQUFnRUMsTUFBTUMsS0FBS0MsU0FBTCxDQUFnQixLQUFLWCxLQUFyQixDQUF0RSxFQUExQixFQUNHWSxJQURILENBQ1M7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQURULEVBRUdGLElBRkgsQ0FFUyxnQkFBUTtBQUNiLGVBQUtHLFFBQUwsQ0FBZSxFQUFDVixPQUFPUyxLQUFLVCxLQUFiLEVBQWY7QUFDRCxPQUpIO0FBTUQ7OztnQ0FFV0EsSyxFQUFPO0FBQ2pCLFVBQUlXLFlBQVksRUFBaEI7QUFDQSxVQUFJWCxNQUFNWSxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ3JCRCxvQkFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWI7QUFDRCxPQUZELE1BRU87O0FBRUxBLG9CQUFZWCxNQUFNYSxPQUFOLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDcENDLGtCQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDVCxpQkFDUTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxlQUFkO0FBQStCQSxrQkFBSUk7QUFBbkMsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSUosa0JBQUlWO0FBQVIsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLDJCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQU0sdURBQUcsV0FBVSw4QkFBYixHQUFOO0FBQ0ssc0JBQUllLElBQUosQ0FBVUwsSUFBSU0sSUFBZCxFQUFvQkMsY0FBcEIsQ0FBb0MsT0FBcEMsRUFBNkMsRUFBQ0MsTUFBTSxTQUFQLEVBQWtCQyxRQUFRLElBQTFCLEVBQWdDQyxRQUFRLFNBQXhDLEVBQTdDLENBREw7QUFBQTtBQUFBO0FBQUosZUFERjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFNLHFEQUFHLFdBQVUsNkJBQWIsR0FBTjtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQU1FO0FBQUE7QUFBQTtBQUNFLHdEQUFNLFdBQVUsMEJBQWhCLEdBREY7QUFFRSx3REFBTSxXQUFVLDBCQUFoQixHQUZGO0FBR0Usd0RBQU0sV0FBVSwwQkFBaEIsR0FIRjtBQUlFLHdEQUFNLFdBQVUsMEJBQWhCLEdBSkY7QUFLRSx3REFBTSxXQUFVLGdDQUFoQjtBQUxGLGVBTkY7QUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFjRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sV0FBVSwwQkFBaEI7QUFBQTtBQUFBLGlCQUFKO0FBQUE7QUFDVVYsb0JBQUlXO0FBRGQ7QUFkRjtBQUpGLFdBRFI7QUEyQlMsU0E3QlMsQ0FBWjtBQThCQzs7QUFFRFQsY0FBUUMsR0FBUixDQUFZTixTQUFaO0FBQ0EsYUFBT0EsU0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQU8sYUFBS2UsV0FBTCxDQUFrQixLQUFLL0IsS0FBTCxDQUFXSyxLQUE3QixDQUFQO0FBQUE7QUFBQSxPQURGO0FBR0Q7Ozs7OztrQkFJWVAsTyIsImZpbGUiOiIyNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5jbGFzcyBMaXN0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJpZDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyksXG4gICAgICBwb3N0czogW11cbiAgICB9O1xuICB9XG4gIDtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCAoJy9hcGkvZ2V0bXlwb3N0cycsIHttZXRob2Q6ICdwb3N0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeSAodGhpcy5zdGF0ZSl9KVxuICAgICAgLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSlcbiAgICAgIC50aGVuIChqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3Bvc3RzOiBqc29uLnBvc3RzfSk7XG4gICAgICB9KTtcblxuICB9XG5cbiAgcG9zdGxpdHNpbmcocG9zdHMpIHtcbiAgICBsZXQgbGlzdEl0ZW1zID0gJyc7XG4gICAgaWYgKHBvc3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsaXN0SXRlbXMgPSAoPGRpdj5ObyByZWNvcmQgPC9kaXY+KTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBsaXN0SXRlbXMgPSBwb3N0cy5mb3JFYWNoICgob2JqLCBrKSA9PiB7XG4gICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xucmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj57b2JqLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPkJ5IHlvdS48L3A+XG4gICAgICAgICAgPHA+e29iai5ib2R5fTwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUgbGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpPjxzcGFuPjxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcIj48L2k+IFxuICAgICAgICAgICAgICAgIHsgICAgbmV3IERhdGUgKG9iai5kYXRlKS50b0xvY2FsZVN0cmluZyAoJ2VuLVVTJywge2hvdXI6ICdudW1lcmljJywgaG91cjEyOiB0cnVlLCBtaW51dGU6ICdudW1lcmljJyAgfSApfSA8L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDxsaT58PC9saT5cbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY29tbWVudFwiPjwvaT4gMCBjb21tZW50czwvc3Bhbj5cbiAgICAgICAgICAgIDxsaT58PC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXItZW1wdHlcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPnw8L2xpPlxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdGFnc1wiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgVGFncyA6IHtvYmoudGFnc31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIFxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuKTtcblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhsaXN0SXRlbXMpXG4gICAgICByZXR1cm4gbGlzdEl0ZW1zO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+IHt0aGlzLnBvc3RsaXRzaW5nICh0aGlzLnN0YXRlLnBvc3RzKX0gPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IExpc3Rpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})