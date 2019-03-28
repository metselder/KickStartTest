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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Hristian.Georgiev\\Desktop\\Materials\\Brackets\\Udemy Kickstart\\Kickstart\\pages\\campaigns\\show.js?entry';


var ComponentShow = function (_React$Component) {
    (0, _inherits3.default)(ComponentShow, _React$Component);

    function ComponentShow() {
        (0, _classCallCheck3.default)(this, ComponentShow);

        return (0, _possibleConstructorReturn3.default)(this, (ComponentShow.__proto__ || (0, _getPrototypeOf2.default)(ComponentShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(ComponentShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                contractBalance = _props.contractBalance,
                minimumContribution = _props.minimumContribution,
                approversCount = _props.approversCount,
                requestsCount = _props.requestsCount,
                owner = _props.owner; // destructuring, istead of var contractbalance = this.props.contractBalance, & и всички останали. Много по бързо


            var items = [{
                header: owner,
                meta: "Address of manager",
                description: 'the manager created that camapaing and can create request to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description: 'you must contribute at lest this much wei to become a contributor'
            }, {
                header: requestsCount,
                meta: "Number of Requests",
                description: 'A request tries to withdraw money from the Contract. Request must be approved by the Approvers'
            }, {
                header: approversCount,
                meta: "Number of Approvers",
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(contractBalance, 'ether'),
                meta: "Campaign balance (ether)",
                description: 'The balamce left over in the contract'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Campaign show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'View Requests')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var query = _ref.query;
                var instance, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _campaign2.default)(query.address);

                            case 2:
                                instance = _context.sent;
                                _context.next = 5;
                                return instance.methods.getSummary().call();

                            case 5:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: query.address,
                                    contractBalance: summary[0],
                                    minimumContribution: summary[1],
                                    approversCount: summary[2],
                                    requestsCount: summary[3],
                                    owner: summary[4]
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ComponentShow;
}(_react2.default.Component);

exports.default = ComponentShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNvbXBvbmVudFNob3ciLCJwcm9wcyIsImNvbnRyYWN0QmFsYW5jZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJhcHByb3ZlcnNDb3VudCIsInJlcXVlc3RzQ291bnQiLCJvd25lciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJxdWVyeSIsImluc3RhbmNlIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFNOztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJLEFBR2I7Ozs7Ozs7Ozs7Ozt5QkF5Qk0sS0FSTSxBQVFEO2dCQVJDLEFBR04seUJBSE0sQUFHTjtnQkFITSxBQUlOLDZCQUpNLEFBSU47Z0JBSk0sQUFLTix3QkFMTSxBQUtOO2dCQUxNLEFBTU4sdUJBTk0sQUFNTjtnQkFOTSxBQU9OLGVBUE0sQUFPTixNQVBNLENBUU0sQUFHaEI7OztnQkFBTTt3QkFDRixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU8sRUFBQyxjQUxGLEFBQ1YsQUFJVyxBQUFlO0FBSjFCLEFBQ0ksYUFGTTt3QkFPVixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQVZNLEFBT1YsQUFHZ0I7QUFIaEIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQWZNLEFBWVYsQUFHZ0I7QUFIaEIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQXBCTSxBQWlCVixBQUdnQjtBQUhoQixBQUNJO3dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixpQkFEL0IsQUFDWSxBQUFvQyxBQUM1QztzQkFGSixBQUVVLEFBQ047NkJBekJSLEFBQWMsQUFzQlYsQUFHZ0IsQUFJcEI7QUFQSSxBQUNJOztpREFNQSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQXFCOzhCQUFyQjtnQ0FBUixBQUFRLEFBQ1g7QUFEVzthQUFBOzs7O2lDQUdILEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXNCOzhCQUF0QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZ0IsU0FBVyxLQUFBLEFBQUssTUFBakMsQUFBdUM7OEJBQXZDO2dDQVBaLEFBQ0ksQUFLSSxBQUNJLEFBR1I7QUFIUTtrQ0FHUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx1QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWpCNUIsQUFDSSxBQUVJLEFBVUksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQWMvQjs7Ozs7O29CQTFGOEIsQSxhQUFBLEE7Ozs7Ozs7dUNBQ04sd0JBQVMsTUFBVCxBLEFBQWU7O2lDQUFoQztBOzt1Q0FDZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7aUNBQTlDO0E7OzZDQUdTLE1BRE4sQUFDWSxBQUNmO3FEQUFpQixRQUZkLEFBRWMsQUFBUSxBQUN6Qjt5REFBcUIsUUFIbEIsQUFHa0IsQUFBUSxBQUM3QjtvREFBZ0IsUUFKYixBQUlhLEFBQVEsQUFDeEI7bURBQWUsUUFMWixBQUtZLEFBQVEsQUFDdkI7MkNBQU8sUUFOSixBQU1JLEFBQVEsQTtBQU5aLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQZ0IsZ0JBQU0sQSxBQStGbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IcmlzdGlhbi5HZW9yZ2lldi9EZXNrdG9wL01hdGVyaWFscy9CcmFja2V0cy9VZGVteSBLaWNrc3RhcnQvS2lja3N0YXJ0In0=