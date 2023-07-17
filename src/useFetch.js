import { useState,useEffect } from "react"
const useFetch= (url) =>{



    const [data, setData] = useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error ,setError]=useState(null)


    useEffect(()=>{

        const abortConst=new AbortController();



        fetch(url,{signal:abortConst.signal})
              .then(res=>{
                 if(!res.ok){
                   throw Error('could not fetch the data for that  resourse ')
                 }
  
                  return res.json();
              })
              .then(data=>{
                  //console.log(data)
                  setData(data)
                  setIsPending(false)
              })
              .catch(err=>{
                  //console.log(err.message)
                  if(ErrorEvent.name==='AbortError'){
                       console.log('abort ')
                  }else{
                    setError(err.message)
                    setIsPending(false)
                    setError(null);

                  }
                 
              })

         return ()=> abortConst.abort();
      },[url]);

      return {data, isPending,error}
     

}


export default useFetch