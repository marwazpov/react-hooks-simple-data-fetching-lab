import React, { useEffect, useState } from "react";

const App = () => {

    const [dogImage, setDogImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((json) => {setDogImage(json.message)
            setIsLoaded(true)});
    }, []);

    if(!isLoaded) return <p>Loading...</p>

    return (
        <img src={dogImage} alt="A Random Dog"></img>
    );



}

export default App;