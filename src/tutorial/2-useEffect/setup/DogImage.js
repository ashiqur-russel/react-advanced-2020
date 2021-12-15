import React,{useState,useEffect} from 'react'


const DogImage = () => {

    const [dogImage,setDogImage]=useState(null);

    const fetchData = async()=>{
        try{
            const response = await fetch([]);
            const json = await response.json();
            console.log(json);
        }catch(error){
            console.log("error",error);
        }
    }


    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random/3")
        .then(response=>response.json())
        .then(data=>setDogImage(data.message))
    },[])
    return (
        <div>
            {dogImage && dogImage.map((dog) => <img className='product' width={"200px"} height={"200px"} src={dog}></img>)}

        </div>
    )
}

export default DogImage
