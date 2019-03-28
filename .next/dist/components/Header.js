'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Hristian.Georgiev\\Desktop\\Materials\\Brackets\\Udemy Kickstart\\Kickstart\\components\\Header.js';


var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            params: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'CrowdCoin ')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Campaigns ')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, '+ '))));
        }
    }]);

    return Header;
}(_react2.default.Component);

// export default () => {
//     //Remember that whenever we are using JSX and we want to pass an object literal We have to place two sets of curly braces.
//     //So the first set on the outside says hey we're about to write a javascript expression here.
//     //And then the second set inside is the actual object literal that we're creating.
//     return (
//         <Menu style = {{ marginTop:'10px' }}>
//             <Menu.Item>CrowdCoin</Menu.Item>
//             <Menu.Menu position = 'right'>
//                 <Menu.Item>Campaigns</Menu.Item>
//                 <Link route = 'campaigns/new'>+</Link>
//             </Menu.Menu>

//         </Menu>
//     )
// }


exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJJbnB1dCIsIkxpbmsiLCJIZWFkZXIiLCJzdGF0ZSIsInBhcmFtcyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU07O0FBQ2QsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFRTs7Ozs7Ozs7Ozs7Ozs7Z04sQUFFakI7b0IsQUFBUSxBQUNJO0FBREosQUFDSjs7Ozs7aUNBR00sQUFDTjttQ0FDSSxBQUFDLHVDQUFLLE9BQVMsRUFBRSxXQUFqQixBQUFlLEFBQVk7OEJBQTNCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUMsOEJBQUssT0FBTixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFGUixBQUNJLEFBQ0ksQUFFSixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQUZSLEFBQ0ksQUFDSSxBQUVKLGdDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFWaEIsQUFDSSxBQUlJLEFBSUksQUFDSSxBQU9uQjs7Ozs7RUF4QitCLGdCQUFNLEE7O0FBNEIxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O2tCQTFDcUIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSHJpc3RpYW4uR2VvcmdpZXYvRGVza3RvcC9NYXRlcmlhbHMvQnJhY2tldHMvVWRlbXkgS2lja3N0YXJ0L0tpY2tzdGFydCJ9