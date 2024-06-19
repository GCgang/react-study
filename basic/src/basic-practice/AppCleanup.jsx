import React, {useState, useEffect} from "react";

function Hello() {
    // const byFN = () => console.log("Bye :(");
    // const hiFn = () => { 
    //     console.log("Hi :)")
    //     return byFN;
    // };
    // useEffect(hiFn, []);
    // return <h1>Hello</h1>;
    useEffect(() => {
        console.log("Hi :)");
        return () => console.log("Bye :(");
    }, []);
    return <h1>Hello</h1>
}

export default function AppCleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
} 