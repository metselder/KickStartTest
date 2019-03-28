'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Hristian.Georgiev\\Desktop\\Materials\\Brackets\\Udemy Kickstart\\Kickstart\\components\\Layout.js';

exports.default = function (props) {

    // We're going to import a little helper from the next library.
    // We're going to say import  Head from 'next/head' --- this head thing right here is a component we can use it inside of any other react component.
    // If we place any other tags inside this thing those child tags will be automatically moved up to the head tag of our  HTML document.
    // So in other words if we wrap the link tag right here with head
    // everything inside of head will be automatically moved up to the head tag of our html document.
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkhlYWQiLCJDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFRLEFBRVI7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBVSxBQUUxQjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJOzJCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUE7YUFDSSxBQUNRLEFBQ0o7Y0FGSixBQUVTOztzQkFGVDt3QkFGUixBQUNJLEFBQ0ksQUFNSjtBQU5JO0FBQ0kseUJBS1IsQUFBQzs7c0JBQUQ7d0JBUkosQUFRSSxBQUNDO0FBREQ7QUFBQSxjQVRSLEFBQ0ksQUFTVyxBQUlsQjtBQXJCRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSHJpc3RpYW4uR2VvcmdpZXYvRGVza3RvcC9NYXRlcmlhbHMvQnJhY2tldHMvVWRlbXkgS2lja3N0YXJ0L0tpY2tzdGFydCJ9