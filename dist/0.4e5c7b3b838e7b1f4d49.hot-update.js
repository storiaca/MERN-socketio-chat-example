webpackHotUpdate(0,{287:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin(props) {\n    _classCallCheck(this, Signin);\n\n    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      //  username: 'anurag@gmail.com',\n      // loginpass: '1234567890',\n      username: '',\n      loginpass: '',\n      loginError: '',\n      signupError: ''\n    };\n\n    _this.handleSignIn = _this.handleSignIn.bind(_this);\n    return _this;\n  }\n\n  _createClass(Signin, [{\n    key: 'handleSignIn',\n    value: function handleSignIn() {\n\n      if (this.state.username !== '' && this.state.loginpass !== '') {\n        this.callSignInApi(this.state);\n      } else {\n        alert(\"Please Enter Login Information \");\n      }\n    }\n  }, {\n    key: 'callSignInApi',\n    value: function callSignInApi(data) {\n      var _this2 = this;\n\n      fetch('/api/singin', {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceSignInHandler(json);\n      });\n    }\n  }, {\n    key: 'serviceSignInHandler',\n    value: function serviceSignInHandler(data) {\n\n      if (data.status === 'success') {\n        PubSub.publish('IS_LOGIN', { status: true, token: data.accesstoken, userid: data.userid });\n      } else {\n        alert(data.message);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'col-md-12' },\n        _react2.default.createElement(\n          'div',\n          { className: 'form-box' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-top-left' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Login '\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Enter username and password to log on:'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-username', value: this.state.username, placeholder: 'Username...',\n              className: 'form-control', onChange: function onChange(event) {\n                _this3.setState({ username: event.target.value });\n              } })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'password', name: 'form-password',\n              value: this.state.loginpass,\n              onChange: function onChange(event) {\n                _this3.setState({ loginpass: event.target.value });\n              },\n              placeholder: 'Password...', className: 'form-control', id: 'form-password' })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement('input', { onClick: this.handleSignIn, className: 'btn  btn-transparent', value: 'Sign in!', type: 'button' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'new-acount' },\n            _react2.default.createElement(\n              'a',\n              { href: '#' },\n              'Forget your password?'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Don\\'t Have an account? ',\n              _react2.default.createElement(\n                'a',\n                { href: 'sign-up.html' },\n                ' SIGN UP'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nexports.default = Signin;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzPzc5ZTEiXSwibmFtZXMiOlsiU2lnbmluIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwibG9naW5wYXNzIiwibG9naW5FcnJvciIsInNpZ251cEVycm9yIiwiaGFuZGxlU2lnbkluIiwiYmluZCIsImNhbGxTaWduSW5BcGkiLCJhbGVydCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZVNpZ25JbkhhbmRsZXIiLCJzdGF0dXMiLCJQdWJTdWIiLCJwdWJsaXNoIiwidG9rZW4iLCJhY2Nlc3N0b2tlbiIsInVzZXJpZCIsIm1lc3NhZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUNNQSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFEQTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVSxFQUpDO0FBS1g7QUFDQTtBQUNBQyxnQkFBVSxFQVBDO0FBUVhDLGlCQUFXLEVBUkE7QUFTWEMsa0JBQVksRUFURDtBQVVYQyxtQkFBYTtBQVZGLEtBQWI7O0FBYUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQWZpQjtBQWdCbEI7Ozs7bUNBRWM7O0FBRWIsVUFBSSxLQUFLVixLQUFMLENBQVdLLFFBQVgsS0FBd0IsRUFBeEIsSUFBOEIsS0FBS0wsS0FBTCxDQUFXTSxTQUFYLEtBQXlCLEVBQTNELEVBQStEO0FBQzdELGFBQUtLLGFBQUwsQ0FBb0IsS0FBS1gsS0FBekI7QUFDRCxPQUZELE1BRU87QUFDTFksY0FBTyxpQ0FBUDtBQUVEO0FBQ0Y7OztrQ0FFYUMsSSxFQUFNO0FBQUE7O0FBRWxCQyxZQUFPLGFBQVAsRUFBc0I7QUFDcEJDLGdCQUFRLE1BRFk7QUFFcEJDLGlCQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUZXO0FBR3BCQyxjQUFNQyxLQUFLQyxTQUFMLENBQWdCTixJQUFoQjtBQUhjLE9BQXRCLEVBS0VPLElBTEYsQ0FLUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BTFIsRUFLNEJGLElBTDVCLENBS2tDLGdCQUFRO0FBQ3hDLGVBQUtHLG9CQUFMLENBQTJCRCxJQUEzQjtBQUNELE9BUEQ7QUFVRDs7O3lDQUVvQlQsSSxFQUFNOztBQUV6QixVQUFJQSxLQUFLVyxNQUFMLEtBQWdCLFNBQXBCLEVBQStCO0FBQzdCQyxlQUFPQyxPQUFQLENBQWdCLFVBQWhCLEVBQTRCLEVBQUNGLFFBQVEsSUFBVCxFQUFlRyxPQUFPZCxLQUFLZSxXQUEzQixFQUF3Q0MsUUFBUWhCLEtBQUtnQixNQUFyRCxFQUE1QjtBQUNELE9BRkQsTUFFTztBQUNMakIsY0FBT0MsS0FBS2lCLE9BQVo7QUFDRDtBQUVGOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUVJO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNBO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixXQURBO0FBTUE7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQVEsTUFBSyxNQUFiLEVBQW9CLE1BQUssZUFBekIsRUFBeUMsT0FBUSxLQUFLOUIsS0FBTCxDQUFXSyxRQUE1RCxFQUFzRSxhQUFZLGFBQWxGO0FBQ1EseUJBQVUsY0FEbEIsRUFDaUMsVUFBVSxrQkFBQzBCLEtBQUQsRUFBVztBQUN4RCx1QkFBS0MsUUFBTCxDQUFlLEVBQUMzQixVQUFVMEIsTUFBTUUsTUFBTixDQUFhQyxLQUF4QixFQUFmO0FBQStDLGVBRjdDO0FBREYsV0FOQTtBQVdBO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLHFEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLGVBQTVCO0FBQ08scUJBQ1AsS0FBS2xDLEtBQUwsQ0FBV00sU0FGWDtBQUdPLHdCQUFVLGtCQUFDeUIsS0FBRCxFQUFXO0FBQzFCLHVCQUFLQyxRQUFMLENBQWUsRUFBQzFCLFdBQVd5QixNQUFNRSxNQUFOLENBQWFDLEtBQXpCLEVBQWY7QUFBZ0QsZUFKbEQ7QUFLTywyQkFBWSxhQUxuQixFQUtpQyxXQUFVLGNBTDNDLEVBSzBELElBQUcsZUFMN0Q7QUFERixXQVhBO0FBbUJBO0FBQUE7QUFBQTtBQUNFLHFEQUFPLFNBQ0gsS0FBS3pCLFlBRFQsRUFDdUIsV0FBVSxzQkFEakMsRUFDd0QsT0FBTSxVQUQ5RCxFQUN5RSxNQUFLLFFBRDlFO0FBREYsV0FuQkE7QUF3QkE7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0g7QUFBQTtBQUFBLGdCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUEsYUFERztBQUVIO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQUE7QUFBQSxrQkFBRyxNQUFLLGNBQVI7QUFBQTtBQUFBO0FBQTFCO0FBRkc7QUF4QkE7QUFERixPQUZKO0FBb0NHOzs7Ozs7a0JBSVlYLE0iLCJmaWxlIjoiMjg3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICAvLyAgdXNlcm5hbWU6ICdhbnVyYWdAZ21haWwuY29tJyxcbiAgICAgIC8vIGxvZ2lucGFzczogJzEyMzQ1Njc4OTAnLFxuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgbG9naW5wYXNzOiAnJyxcbiAgICAgIGxvZ2luRXJyb3I6ICcnLFxuICAgICAgc2lnbnVwRXJyb3I6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlU2lnbkluID0gdGhpcy5oYW5kbGVTaWduSW4uYmluZCAodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTaWduSW4oKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gJycgJiYgdGhpcy5zdGF0ZS5sb2dpbnBhc3MgIT09ICcnKSB7XG4gICAgICB0aGlzLmNhbGxTaWduSW5BcGkgKHRoaXMuc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCAoXCJQbGVhc2UgRW50ZXIgTG9naW4gSW5mb3JtYXRpb24gXCIpO1xuXG4gICAgfVxuICB9XG5cbiAgY2FsbFNpZ25JbkFwaShkYXRhKSB7XG5cbiAgICBmZXRjaCAoJy9hcGkvc2luZ2luJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSAoZGF0YSlcbiAgICB9XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgdGhpcy5zZXJ2aWNlU2lnbkluSGFuZGxlciAoanNvbilcbiAgICB9KTtcblxuXG4gIH1cblxuICBzZXJ2aWNlU2lnbkluSGFuZGxlcihkYXRhKSB7XG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgUHViU3ViLnB1Ymxpc2ggKCdJU19MT0dJTicsIHtzdGF0dXM6IHRydWUsIHRva2VuOiBkYXRhLmFjY2Vzc3Rva2VuLCB1c2VyaWQ6IGRhdGEudXNlcmlkfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0IChkYXRhLm1lc3NhZ2UpO1xuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdG9wLWxlZnRcIj5cbiAgICAgICAgICAgIDxoMz5Mb2dpbiA8L2gzPlxuICAgICAgICAgICAgPHA+RW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIHRvIGxvZyBvbjo8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9ybS11c2VybmFtZVwiIHZhbHVlID17dGhpcy5zdGF0ZS51c2VybmFtZX0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZS4uLlwiICBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHt1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJmb3JtLXBhc3N3b3JkXCIgICBcbiAgICAgICAgICAgICAgICAgICB2YWx1ZSA9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2dpbnBhc3N9ICAgXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7bG9naW5wYXNzOiBldmVudC50YXJnZXQudmFsdWV9KX19XG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZm9ybS1wYXNzd29yZFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2lnbklufSBjbGFzc05hbWU9XCJidG4gIGJ0bi10cmFuc3BhcmVudFwiIHZhbHVlPVwiU2lnbiBpbiFcIiB0eXBlPVwiYnV0dG9uXCIvPlxuICAgICAgICAgIDwvZGl2Plx0XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWNvdW50XCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+Rm9yZ2V0IHlvdXIgcGFzc3dvcmQ/PC9hPlxuXHRcdFx0XHRcdFx0XHQ8cD5Eb24ndCBIYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCJzaWduLXVwLmh0bWxcIj4gU0lHTiBVUDwvYT48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgO1xuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0IFNpZ25pbjtcblxuXG5cbiAgICAgICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///287\n")}});