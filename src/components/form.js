import React, {useState} from 'react';

const Form = (props) => {
    const {boxColorArr, setBoxColorArr} = props;

    const [color, setColor] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit} style={{margin: '20px'}}>
                <div>
                    <label htmlFor="firstName">Color</label>
                    <input
                    type='text'
                    name='color'
                    onChange={(e) => setColor(e.target.value) }>
                    </input>
                </div>
            </form>
        </div>
        )
}

export default Form;