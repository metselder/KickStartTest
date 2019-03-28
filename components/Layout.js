import React from 'react';
import Header from './Header';
import Head from 'next/head'
import {Container} from 'semantic-ui-react';

export default (props) => {

// We're going to import a little helper from the next library.
// We're going to say import  Head from 'next/head' --- this head thing right here is a component we can use it inside of any other react component.
// If we place any other tags inside this thing those child tags will be automatically moved up to the head tag of our  HTML document.
// So in other words if we wrap the link tag right here with head
// everything inside of head will be automatically moved up to the head tag of our html document.
    return(
        <Container>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" 
                />
            </Head>
            
            <Header/>
            {props.children}
        </Container>
    )
    
}