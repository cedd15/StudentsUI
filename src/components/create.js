import React from 'react';

const create = () => {
    const handleSubmit = () => {
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
     );
}
 
export default create;