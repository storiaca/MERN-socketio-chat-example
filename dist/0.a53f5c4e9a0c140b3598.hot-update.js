webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      e.target.disabled = true;\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          var tempData = [];\n\n          json.list.forEach(function (val1, k) {\n            if (val1.hasOwnProperty('friends')) {\n              var isExist = false;\n              val1.friends.forEach(function (frnd, k) {\n                if (frnd.userid === _this2.state.userid) {\n                  isExist = true;\n                }\n              });\n              if (!isExist) {\n                tempData.push(val1);\n              }\n            } else {\n              tempData.push(val1);\n            }\n          });\n\n          console.log(tempData);\n          _this2.setState({ userList: tempData });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIm9iaiIsInJlcXVlc3RlZGJ5IiwicmVxdWVzdGVkdG8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wRGF0YSIsImxpc3QiLCJmb3JFYWNoIiwidmFsMSIsImsiLCJpc0V4aXN0IiwiZnJpZW5kcyIsImZybmQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibGlzdEl0ZW1zIiwibGVuZ3RoIiwibWFwIiwiX2lkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInZpZXdQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDTUEsSzs7O0FBRUosaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsY0FBU0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0I7QUFGRSxLQUFiO0FBSUEsVUFBS0MsU0FBTCxHQUFlLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFmO0FBTmlCO0FBT2xCOzs7OzhCQUdVQyxDLEVBQUVDLEUsRUFBRztBQUNkRCxRQUFFRSxNQUFGLENBQVNDLFFBQVQsR0FBa0IsSUFBbEI7QUFDQSxVQUFJQyxNQUFJLEVBQUVDLGFBQVksS0FBS2IsS0FBTCxDQUFXRSxNQUF6QixFQUFpQ1ksYUFBWUwsRUFBN0MsRUFBUjtBQUNDTSxnQ0FDTztBQUNFQyxnQkFBUSxNQURWO0FBRUVDLGlCQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUZYO0FBR0VDLGNBQUtDLEtBQUtDLFNBQUwsQ0FBZ0JSLEdBQWhCO0FBSFAsT0FEUCxFQU1DUyxJQU5ELENBTU87QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQU5QLEVBTTJCRixJQU4zQixDQU1pQyxnQkFBUSxDQUV6QyxDQVJBO0FBU0Y7Ozt3Q0FFb0I7QUFBQTs7QUFDbkJOLGtDQUEyQixLQUFLZixLQUFMLENBQVdFLE1BQXRDLEVBQWdELEVBQUNjLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBaEQsRUFDRUksSUFERixDQUNRO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FEUixFQUM0QkYsSUFENUIsQ0FDa0MsZ0JBQVE7QUFDeEMsWUFBSUUsS0FBS0MsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2xDLGNBQUlDLFdBQVMsRUFBYjs7QUFFRUYsZUFBS0csSUFBTCxDQUFVQyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBTUMsQ0FBTixFQUFVO0FBQ2pCLGdCQUFHRCxLQUFLSixjQUFMLENBQW9CLFNBQXBCLENBQUgsRUFBa0M7QUFDaEMsa0JBQUlNLFVBQVEsS0FBWjtBQUNDRixtQkFBS0csT0FBTCxDQUFhSixPQUFiLENBQXFCLFVBQUNLLElBQUQsRUFBTUgsQ0FBTixFQUFVO0FBQzdCLG9CQUFHRyxLQUFLOUIsTUFBTCxLQUFjLE9BQUtGLEtBQUwsQ0FBV0UsTUFBNUIsRUFBbUM7QUFDakM0Qiw0QkFBUSxJQUFSO0FBQ0Q7QUFDRixlQUpEO0FBS0Esa0JBQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1RMLHlCQUFTUSxJQUFULENBQWNMLElBQWQ7QUFDRjtBQUNILGFBVkQsTUFVSztBQUNKSCx1QkFBU1EsSUFBVCxDQUFjTCxJQUFkO0FBQ0w7QUFDTCxXQWRGOztBQWdCQ00sa0JBQVFDLEdBQVIsQ0FBWVYsUUFBWjtBQUNELGlCQUFLVyxRQUFMLENBQWUsRUFBQ25DLFVBQVV3QixRQUFYLEVBQWY7QUFDRDtBQUNGLE9BeEJEO0FBeUJEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJQyxPQUFPLEtBQUsxQixLQUFMLENBQVdDLFFBQXRCO0FBQ0EsVUFBSW9DLFlBQVksSUFBaEI7QUFDQSxVQUFJWCxLQUFLWSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJELG9CQUFZWCxLQUFLYSxHQUFMLENBQVUsVUFBQzNCLEdBQUQsRUFBUztBQUM3QixpQkFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZCQUFmLEVBQTZDLEtBQUtBLElBQUk0QixHQUF0RDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJLHVEQUFLLEtBQUkseUJBQVQsRUFBbUMsV0FBVSxPQUE3QyxHQURKO0FBRUs7QUFBQTtBQUFBLG9CQUFJLFdBQVUsaUJBQWQ7QUFBaUM1QixzQkFBSTZCLFNBQXJDO0FBQUE7QUFBaUQ3QixzQkFBSThCO0FBQXJELGlCQUZMO0FBR0s7QUFBQTtBQUFBO0FBQUE7QUFBSzlCLHNCQUFJK0I7QUFBVCxpQkFITDtBQUlJO0FBQUE7QUFBQSxvQkFBUyxXQUFVLHdCQUFuQixFQUE4QyxTQUFTLGlCQUFDbkMsQ0FBRCxFQUFLO0FBQUUsNkJBQUtGLFNBQUwsQ0FBZUUsQ0FBZixFQUFpQkksSUFBSTRCLEdBQXJCO0FBQTBCLHFCQUF4RjtBQUNFLHVEQUFHLFdBQVUsMEJBQWIsR0FERjtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQVNJO0FBQUE7QUFBQSxvQkFBUSxXQUFVLHdCQUFsQixFQUEyQyxTQUFTLGlCQUFDaEMsQ0FBRCxFQUFLO0FBQUUsNkJBQUtvQyxXQUFMLENBQWlCaEMsSUFBSTRCLEdBQXJCO0FBQTBCLHFCQUFyRjtBQUNFLHVEQUFHLFdBQVUsOEJBQWIsR0FERjtBQUFBO0FBQUE7QUFUSjtBQURGO0FBREYsV0FERjtBQW9CRCxTQXJCVyxDQUFaO0FBdUJELE9BeEJELE1Bd0JPO0FBQ0xILG9CQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBYjtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0dBO0FBREg7QUFERixPQURGO0FBV0Q7Ozs7OztrQkFJWXZDLEsiLCJmaWxlIjoiMjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL2hvbWUuc2Nzc1wiO1xuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlckxpc3Q6IFtdLFxuICAgICAgdXNlcmlkIDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJylcbiAgICB9O1xuICAgIHRoaXMuYWRkRnJpZW5kPXRoaXMuYWRkRnJpZW5kLmJpbmQodGhpcyk7XG4gIH0gO1xuICBcbiAgXG4gICBhZGRGcmllbmQoZSxpZCl7XG4gICAgZS50YXJnZXQuZGlzYWJsZWQ9dHJ1ZTtcbiAgICBsZXQgb2JqPXsgcmVxdWVzdGVkYnk6dGhpcy5zdGF0ZS51c2VyaWQsIHJlcXVlc3RlZHRvOmlkIH07XG4gICAgIGZldGNoIChgL2FwaS9zZW5kcmVxdWVzdGAsIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KCBvYmopXG4gICAgICAgICAgfVxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcbiAgICAgICBcbiAgICB9KTtcbiAgfVxuICBcbiAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoIChgL2FwaS9nZXR1c2VybGlzdC8ke3RoaXMuc3RhdGUudXNlcmlkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgIGxldCB0ZW1wRGF0YT1bXTsgIFxuICAgICAgXG4gICAgICAgIGpzb24ubGlzdC5mb3JFYWNoKCh2YWwxLGspPT57XG4gICAgICAgICAgICAgICAgICAgaWYodmFsMS5oYXNPd25Qcm9wZXJ0eSgnZnJpZW5kcycpKXtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0PWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHZhbDEuZnJpZW5kcy5mb3JFYWNoKChmcm5kLGspPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmcm5kLnVzZXJpZD09PXRoaXMuc3RhdGUudXNlcmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFeGlzdD10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgaWYoIWlzRXhpc3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBEYXRhLnB1c2godmFsMSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBEYXRhLnB1c2godmFsMSkgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgICBjb25zb2xlLmxvZyh0ZW1wRGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKHt1c2VyTGlzdDogdGVtcERhdGF9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgbGlzdCA9IHRoaXMuc3RhdGUudXNlckxpc3Q7XG4gICAgbGV0IGxpc3RJdGVtcyA9IG51bGw7XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgbGlzdEl0ZW1zID0gbGlzdC5tYXAgKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS01IGNvbC14cy0xMlwiIGtleT17b2JqLl9pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+IFxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFycy9wcm9maWxlLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57b2JqLmZpcnN0TmFtZX0ge29iai5sYXN0TmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgIDxwPiB7b2JqLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIiAgIG9uQ2xpY2s9eyhlKT0+eyB0aGlzLmFkZEZyaWVuZChlLG9iai5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAmbmJzcDsgQWRkIGFzIGZyaWVuZCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXhzXCIgb25DbGljaz17KGUpPT57IHRoaXMudmlld1Byb2ZpbGUob2JqLl9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7VmlldyBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdEl0ZW1zID0gKDxkaXY+Tm8gcmVjb3JkIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgKTtcblxuXG5cbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL2hvbWUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})