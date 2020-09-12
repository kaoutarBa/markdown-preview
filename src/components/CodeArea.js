import React,{useState}from 'react';
import {DragDropArea,
    StyledTransCode,
    Container,
    Title,
    Mk,
    P,
    Html,
    MkSection,
    HtmlSection,
    Header} from "./styles.js";
import markdown from "markdown-it";


const createMarkup = x =>{
    const md = new markdown();
    return {__html: md.render(x)};
};

const CodeArea = ()=> {
    const [value,setValue]= useState("## Hello World!");

    const handle = (e,color)=>{
        e.stopPropagation();
        e.preventDefault();
        e.target.style.backgroundColor=color;

    };

    const ParseFile= file=> {
        if (file.type.indexOf("text") === 0) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setValue(
                    e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;") 
                    );
                };
            reader.readAsText(file);
        };
    };


    const handleDrop= e => {
        handle(e,"#f4fe865c");
        let files = e.dataTransfer.files;
        for (let i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        };
    };

    const handleChange= e=> setValue(e.target.value);
    const handleDragOver= e=> handle(e,"azure");
    const handleDragLeave= e=> handle(e,"#f4fe865c");

    return (
        <Container>
            <Header>
                <Title>Markdown to HTML</Title>
            </Header>
            <MkSection>
                <Mk>Markdown </Mk>
                <P>Feel free to write or to drop a file in this section !</P>
            </MkSection>
            <HtmlSection>
                <Html>HTML</Html>
                <P>Preview how look your converted HTML code !</P>
            </HtmlSection>
            <DragDropArea  
            value = {value}
            onChange={handleChange} 
            onDrop={handleDrop} 
            onDragOver={handleDragOver} 
            onDragLeave={handleDragLeave}/>
            <StyledTransCode >
                <div dangerouslySetInnerHTML={createMarkup(value)} />
            </StyledTransCode>
        </Container>
        );
    };

export default CodeArea;    
