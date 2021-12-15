import React,{useState,useEffect} from 'react'



const DogImage = () => {

    const [dogImage,setDogImage]=useState(null);
    const [advice, setAdvice] = useState("")


 

    useEffect(()=>{
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async()=>{
        try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setAdvice(json.slip.advice);

        }catch(error){
            console.log("error",error);
        }
    };

    fetchData();
 },[]);


    return (
        <div>
            <div style={{margin:'0 auto',height:'0 auto',display:'flex',width:'0 auto',textAlign:'center',background:'red',marginBottom:'5px'}}>
                    <p style={{fontSize:'30px'}}>{advice}</p>
            </div>
            <div style={{margin:'0 auto',height:'0 auto',display:'flex',width:'0 auto',textAlign:'center',background:'green'}}>
                    <p style={{fontSize:'30px'}}>{advice}</p>
            </div>
        </div>
    )
}

export default DogImage
