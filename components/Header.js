import React, {Component} from 'react';
import {Menu, Input} from 'semantic-ui-react';
import {Link} from '../routes';

export default class Header extends React.Component {
    
    state = {
        params: ''
    }

    render () {
        return (
            <Menu style = {{ marginTop:'10px' }}>
                <Link route = '/'>
                    <a className = "item">CrowdCoin </a>
                </Link>
                <Menu.Menu position = 'right' >
                    <Link route = '/'>
                        <a className = "item">Campaigns </a>
                    </Link>
                    <Link route = '/campaigns/new'>
                        <a className = "item">+ </a>
                    </Link>
                
                </Menu.Menu>
                
            </Menu>
        )
    }
}


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