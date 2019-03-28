'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser *AND* the user has metaMask running on the browser. THIS IS where web3 is coming from.
    //We are going to take its web3 version as provider so we are sure that we have the same versioning of web3 on its and our side as well
    web3 = new _web2.default(window.web3.currentProvider);
    console.log('browser');
} else {
    //we are on the server *OR* the user does not have metamask installed
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/705ab18041d44c6aa13e7a73372135b2');
    web3 = new _web2.default(provider);

    console.log('server');
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUEzRCxhQUF3RSxBQUNwRTtBQUNBO0FBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO1lBQVEsQUFBUixJQUFZLEFBQVosQUFDSDtBQUxELE9BS08sQUFDSDtBQUNBO1FBQUksV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEFBQWhDLEFBQWYsQUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFFQTs7WUFBUSxBQUFSLElBQVksQUFBWixBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IcmlzdGlhbi5HZW9yZ2lldi9EZXNrdG9wL01hdGVyaWFscy9CcmFja2V0cy9VZGVteSBLaWNrc3RhcnQvS2lja3N0YXJ0In0=