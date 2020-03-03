
//import React from 'react';
import styled from 'styled-components';


const DragDropArea= styled.textarea`
height: 100%;
width: 50%;
position: fixed;
z-index: 1;
top: 0;
overflow-x: hidden;
padding-top: 20px;
left: 0;
background-color: azure ;
outline-style: solid ;
outline-color: ridge;



`
;



const StyledTransCode= styled.div`
height: 100%;
width: 50%;
position: fixed;
z-index: 1;
top: 0;
overflow-x: hidden;
padding-top: 20px;
right: 0;
background-color: wheat;
outline-style: solid ;
outline-color: ridge;

`;


export {DragDropArea,StyledTransCode};
