import styled from 'styled-components';


const Container=styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:50% 50%;
grid-template-rows:15% 10% 75%;
`;
const Title=styled.div`
font-size: 25px;
font-family: sans-serif;
font-weight: 600;
color: #BB86FE;
margin:auto;
`;
const P=styled.div`
font-size: 12px;
font-family: sans-serif;
font-weight: 300;
`;
const Mk=styled.div`
font-size: 20px;
font-weight: 600;
font-family: sans-serif;
color: #C4BD20;
`;
const Html=styled.div`
font-size: 20px;
font-weight: 600;
font-family: sans-serif;
color: #71B33D;

`;
const MkSection=styled.div`
grid-column:1/2;
grid-row:2/3;
margin-left:5px;

`;

const HtmlSection=styled.div`
grid-column:2/3;
grid-row:2/3;
display:flex;
flex-direction:column;
align-items:flex-end;
margin-right:5px;

`;

const DragDropArea= styled.textarea`
outline:none;
width: 600px;
height: 446px;
background: #f4fe865c;
border: 1px solid rgba(196, 189, 32, 0.67);
box-sizing: border-box;
border-radius: 2px;
grid-column:1/2;
grid-row:3/4;
justify-self:center;
`;

const StyledTransCode= styled.div`
width: 600px;
height: 446px;
background: rgba(187, 254, 134, 0.24);
border: 1px solid #5FAC23;
box-sizing: border-box;
border-radius: 2px;
font-family:sans-serif;
grid-column:2/3;
grid-row:3/4;
justify-self:center;
overflow-y:auto;
padding-left:6px;
`;

const Header=styled.div`
grid-column:1/3;
grid-row:1/2;
width:100%;
position:fixed;
height: 70px;
top:0px;
left:0px;
border-bottom:1px solid #D5D5D5;
background: rgba(229, 229, 229, 0.1);
display:flex;
`;


export {DragDropArea,
    MkSection,
    HtmlSection,
    StyledTransCode,Container,Title,Mk,Html,Header,P};
