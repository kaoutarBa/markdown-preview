import React,{useState}from 'react';
import {DragDropArea,StyledTransCode} from "./styles.js";
import markdown from "markdown-it";

const createMarkup = x =>{
    const md = new markdown();
    return {__html: md.render(x)};
};


const CodeArea = ()=> {
    const [value,setValue]= useState(` 
    please fill in the blanks

                or 
                
    Drag and Drop a file `);

    const handle = (e,color)=>{
        e.stopPropagation();
        e.preventDefault();
        e.target.style.backgroundColor=color;

    };

    const ParseFile= file=> {
        if (file.type.indexOf("text") == 0) {
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
        handle(e,"azure");
        let files = e.dataTransfer.files;
        for (let i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        };
    };

    const handleChange= e=> setValue(e.target.value);
    const handleDragOver= e=> handle(e,"#b3ffb3");
    const handleDragLeave= e=> handle(e,"azure");

    return (
        <div>
            <DragDropArea  
            value = {value}
            onChange={handleChange} 
            onDrop={handleDrop} 
            onDragOver={handleDragOver} 
            onDragLeave={handleDragLeave}/>
            <StyledTransCode >
            <div dangerouslySetInnerHTML={createMarkup(value)} />
            </StyledTransCode>
        </div>
        );
    };

export default CodeArea;    
