'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Hristian.Georgiev\\Desktop\\Materials\\Brackets\\Udemy Kickstart\\Kickstart\\components\\requestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return (0, _campaign2.default)(_this.props.address);

                            case 6:
                                campaign = _context.sent;
                                _context.next = 9;
                                return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalize = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();
                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;
                                _context2.next = 6;
                                return (0, _campaign2.default)(_this.props.address);

                            case 6:
                                campaign = _context2.sent;
                                _context2.next = 9;
                                return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalsCount > approversCount / 2;

            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _web2.default.utils.fromWei(request.amount, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, request.approvalsCount + ' / ' + approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, request.complete ? false : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, request.complete ? false : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxzQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwiYW1vdW50IiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO2lHQUFZLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUjtzQ0FEUSxBQUNSLEFBQU07Z0RBREU7dUNBRWEsY0FBQSxBQUFLLElBRmxCLEFBRWEsQUFBUzs7aUNBQTFCO0FBRkksb0RBQUE7Z0RBQUE7dUNBR2Usd0JBQVMsTUFBQSxBQUFLLE1BSDdCLEFBR2UsQUFBb0I7O2lDQUFyQztBQUhFLG9EQUFBO2dEQUFBO3VDQUlGLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDLEtBQUssRUFBQyxNQUFNLFNBSnpELEFBSUYsQUFBb0QsQUFBTyxBQUFTOztpQ0FKbEU7aUNBQUE7Z0RBQUE7O0FBQUE7NEJBQUE7QTs7Ozs7bUIsQUFPWjtpR0FBYSxrQkFBQSxBQUFPLE9BQVA7OEJBQUE7Z0ZBQUE7OEJBQUE7MkRBQUE7aUNBQ1Q7c0NBRFMsQUFDVCxBQUFNO2lEQURHO3VDQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O2lDQUExQjtBQUZLLHFEQUFBO2lEQUFBO3VDQUdjLHdCQUFTLE1BQUEsQUFBSyxNQUg1QixBQUdjLEFBQW9COztpQ0FBckM7QUFIRyxxREFBQTtpREFBQTt1Q0FJSCxTQUFBLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdELEtBQUssRUFBQyxNQUFNLFNBSnpELEFBSUgsQUFBcUQsQUFBTyxBQUFTOztpQ0FKbEU7aUNBQUE7aURBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OztpQ0FRSjtnQkFBQSxBQUNFLE1BREYsQUFDZSx1QkFEZixBQUNFO2dCQURGLEFBQ08sT0FEUCxBQUNlLHVCQURmLEFBQ087eUJBQzBCLEtBRmpDLEFBRXNDO2dCQUZ0QyxBQUVFLFlBRkYsQUFFRTtnQkFGRixBQUVNLGlCQUZOLEFBRU07Z0JBRk4sQUFFZSx3QkFGZixBQUVlLEFBQ3BCOztnQkFBTSxrQkFBa0IsUUFBQSxBQUFRLGlCQUFpQixpQkFBakQsQUFBa0UsQUFFbEU7O21DQUNLLGNBQUQsT0FBSyxVQUFZLFFBQWpCLEFBQXlCLFVBQVUsVUFBWSxtQkFBbUIsQ0FBQyxRQUFuRSxBQUEyRTs4QkFBM0U7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsZUFESixBQUNJLEFBQ0EscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBRkosQUFFSSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsNkJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixRQUh0QyxBQUdJLEFBQU8sQUFBbUMsQUFDMUMsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBSkosQUFJSSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBVTtBQUFWO0FBQUEsdUJBQUEsQUFBa0IseUJBTHRCLEFBS0ksQUFBc0MsQUFDdEMsaUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsdUJBQ00sQUFBUSxXQUFSLEFBQW1CLHdCQUViLEFBQUMseUNBQU8sT0FBUixBQUFnQixTQUFRLE9BQXhCLE1BQThCLFNBQVcsS0FBekMsQUFBOEM7OEJBQTlDO2dDQUFBO0FBQUE7YUFBQSxFQVRoQixBQU1JLEFBR1ksQUFLWiw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUVRO0FBRlI7QUFBQSx1QkFFUSxBQUFRLFdBQVIsQUFBbUIsd0JBRWYsQUFBQyx5Q0FBTyxPQUFSLEFBQWdCLFFBQU8sT0FBdkIsTUFBNkIsU0FBVyxLQUF4QyxBQUE2Qzs4QkFBN0M7Z0NBQUE7QUFBQTthQUFBLEVBbkJwQixBQUNJLEFBY0ksQUFJWSxBQVV2Qjs7Ozs7QUFuRG9CLEEsQUFzRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSHJpc3RpYW4uR2VvcmdpZXYvRGVza3RvcC9NYXRlcmlhbHMvQnJhY2tldHMvVWRlbXkgS2lja3N0YXJ0L0tpY2tzdGFydCJ9