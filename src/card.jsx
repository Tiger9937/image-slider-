import React from 'react'


export default function card(props) {
    return (
        
            <>
            <div className="card m-3 bg-black" style={{width: "82rem" , height: "35rem"}}>
                <div className="card-body">
                            <img src={`${props.imgNo}`} alt="" />
                    <p className={`card-text text-justify`} style={{"color": `${props.textcolor}`,"text-align": "center"}}>{`${props.name || " "}`}</p>
                </div>
            </div>
        </>
    )
}
