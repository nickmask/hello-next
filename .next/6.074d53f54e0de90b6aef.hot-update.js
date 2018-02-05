webpackHotUpdate(6,{

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(399);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(412);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Dev\\hello-next\\pages\\post.js?entry';


var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.show.name), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiUG9zdCIsInByb3BzIiwic2hvdyIsIm5hbWUiLCJzdW1tYXJ5IiwicmVwbGFjZSIsImltYWdlIiwibWVkaXVtIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sT0FBUSxTQUFSLEFBQVEsS0FBQSxBQUFDLE9BQUQ7eUJBQ1YsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxrQkFDRyxjQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFLLEFBQU0sS0FEZCxBQUNHLEFBQWdCLEFBQ2hCLHVCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFdBQUksQUFBTSxLQUFOLEFBQVcsUUFBWCxBQUFtQixRQUFuQixBQUEyQixZQUZsQyxBQUVHLEFBQUksQUFBdUMsQUFDM0MsNkNBQUssS0FBSyxNQUFBLEFBQU0sS0FBTixBQUFXLE1BQXJCLEFBQTJCO2dCQUEzQjtrQkFKTyxBQUNWLEFBR0c7QUFBQTs7QUFKUDs7QUFRQSxLQUFBLEFBQUssOEJBQUw7c0ZBQXVCLGlCQUFBLEFBQWdCLFNBQWhCO2lCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQ2I7QUFEYSxpQkFDTixRQURNLEFBQ0UsTUFERixBQUNiOzRCQURhO21CQUVILG1FQUZHLEFBRUgsQUFBc0M7O2VBQWxEO0FBRmUsMkJBQUE7NEJBQUE7bUJBR0YsSUFIRSxBQUdGLEFBQUk7O2VBQWpCO0FBSGUsNEJBS3JCOztvQkFBQSxBQUFRLHVCQUFxQixLQUxSLEFBS3JCLEFBQWtDOzs2Q0FFM0IsRUFBRSxNQVBZLEFBT2Q7O2VBUGM7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUF2Qjs7dUJBQUE7NEJBQUE7QUFBQTtBQVVBOztrQkFBQSxBQUFlIiwiZmlsZSI6InBvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovRGV2L2hlbGxvLW5leHQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Dev\\hello-next\\pages\\post.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Dev\\hello-next\\pages\\post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wNzRkNTNmNTRlMGRlOTBiNmFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz9iNzYyNDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IFBvc3QgPSAgKHByb3BzKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICA8aDE+e3Byb3BzLnNob3cubmFtZX08L2gxPlxuICAgICAgIDxwPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxuICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0vPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKVxuICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXG5cbiAgcmV0dXJuIHsgc2hvdyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFKQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9