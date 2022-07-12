import React from "react";

const Display = (props) => {
    const {boxColorArr} = props;

    return (
        <div>
            {
                boxColorArr.map((color, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        margin: '10px',
                        height: '50px',
                        width: '50px',
                        backgroundColor: color
                    }}>
                </div>
                ))
            }
        </div>
    );
}

export default Display;