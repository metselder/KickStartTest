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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Hristian.Georgiev\\Desktop\\Materials\\Brackets\\Udemy Kickstart\\Kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            address: '',
            inputValue: '',
            loading: false,
            error: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var instance, account;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, error: '' });

                                _context.next = 4;
                                return (0, _campaign2.default)(_this.props.address);

                            case 4:
                                instance = _context.sent;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                account = _context.sent;
                                _context.prev = 8;
                                _context.next = 11;
                                return instance.methods.contribute().send({ from: account[0], value: _web2.default.utils.toWei(_this.state.inputValue, 'ether') });

                            case 11:
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](8);

                                _this.setState({ error: _context.t0.message });

                            case 17:
                                _this.setState({ loading: false, inputValue: '' });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[8, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.error, onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, { label: 'Ether',
                labelPosition: 'right',
                value: this.state.inputValue,
                onChange: function onChange(event) {
                    return _this3.setState({ inputValue: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.error, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' Contribute '));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJhZGRyZXNzIiwiaW5wdXRWYWx1ZSIsImxvYWRpbmciLCJlcnJvciIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicHJvcHMiLCJpbnN0YW5jZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudCIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBQ0Y7cUJBQVEsQUFDSSxBQUNSO3dCQUZJLEFBRVEsQUFDWjtxQkFISSxBQUdLLEFBQ1Q7bUJBSkksQSxBQUlHO0FBSkgsQUFDSixpQkFRSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRU47O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLE9BSHZCLEFBR1AsQUFBYyxBQUFzQjs7Z0RBSDdCO3VDQUtjLHdCQUFTLE1BQUEsQUFBSyxNQUw1QixBQUtjLEFBQW9COztpQ0FBckM7QUFMRyxvREFBQTtnREFBQTt1Q0FNYSxjQUFBLEFBQUssSUFObEIsQUFNYSxBQUFTOztpQ0FBekI7QUFORyxtREFBQTtnREFBQTtnREFBQTt1Q0FRRyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixLQUFLLEVBQUMsTUFBSyxRQUFOLEFBQU0sQUFBUSxJQUFJLE9BQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixZQVIzRixBQVFHLEFBQW1DLEFBQXlCLEFBQXdDOztpQ0FDMUc7K0NBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BVHBDLEFBU0gsQUFBNkM7Z0RBVDFDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVdIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLFlBWG5CLEFBV0gsQUFBYyxBQUFjOztpQ0FFaEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE9BQU8sWUFieEIsQUFhUCxBQUFjLEFBQTZCOztpQ0FicEM7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FtQkQ7eUJBQ047O21DQUNJLEFBQUMsdUNBQUssT0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLE9BQU8sVUFBWSxLQUEvQyxBQUFvRDs4QkFBcEQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQyx3Q0FBTSxPQUFQLEFBQWUsQUFDZjsrQkFEQSxBQUNnQixBQUNoQjt1QkFBUyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNwQjswQkFBWSxrQkFBQSxBQUFDLE9BQUQ7MkJBQVcsT0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFZLE1BQUEsQUFBTSxPQUE1QyxBQUFXLEFBQWMsQUFBMEI7QUFIL0Q7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQU1KO0FBTkk7aUNBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF3QixRQUFPLFNBQVcsS0FBQSxBQUFLLE1BQS9DLEFBQXFEOzhCQUFyRDtnQ0FUSixBQVNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBVyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7OEJBQXRDO2dDQUFBO0FBQUE7ZUFYUixBQUNJLEFBVUksQUFHWDs7Ozs7QUE1Q3dCLEEsQUErQzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0hyaXN0aWFuLkdlb3JnaWV2L0Rlc2t0b3AvTWF0ZXJpYWxzL0JyYWNrZXRzL1VkZW15IEtpY2tzdGFydC9LaWNrc3RhcnQifQ==