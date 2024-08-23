import React from 'react';
import {useSelector} from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {

    let count = useSelector(state => state.count);

    return (
        <div>
            <h2>this is box {count}</h2>
            <GrandSonBox />
        </div>
    );
};

export default Box;