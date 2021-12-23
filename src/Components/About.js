import React, {useState} from 'react';

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'?'white':'black',
    }

    // const[myStyle, setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // });
    // const [btntext, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white',
    //         })
    //         setBtnText("Enablke Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2 className="my-2">About Us</h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze text quickly anf efficiently. Be it word count, character count or 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count $ word count statistics for a given text. Textutils reports the number of words and characters, thus it is suitable for writing text with wird/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browse Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays etc.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div> */}
            
        </div>
    )
}
