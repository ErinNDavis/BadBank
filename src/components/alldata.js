import React from "react";
import DataContext from '../Context';

function AllData(){
    const ctx = React.useContext(DataContext);
    return (
        <h1>AllData<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default AllData;

