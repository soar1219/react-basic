import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const onClickButton = () => {
    alert("クリック");
}

const App = () => {
    return(
        <>
            <h1 style={{color: "red"}}>こんにちは</h1>
            <ColorfulMessage color="Blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="pink">元気です！</ColorfulMessage>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
}

export default App;