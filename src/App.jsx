import {useEffect} from 'react';
import axios from 'axios';

const App = () => {

  // testing inplay endpoint;
  // `http://127.0.0.1:3000/apidocs/sports/inplay/{sports_id}`

  const fetchData = async ()=>{
    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((resp)=>{
      console.log('MyData:- ',resp.data);
      /* if(resp.ok){
      }else{
        console.log(`HTTP error! Status:${resp.status}`);
      } */
    })
    .catch((error)=>{
      console.log("MyError:- ",error);
    })
  };

  useEffect(()=>{
    fetchData()
  },[])

  /* function fetchData(sports_id){
    return new Promise((resolve,reject)=>{
      fetch(`http://127.0.0.1:3000/apidocs/sports/inplay/${sports_id}`)
      .then((response)=>{
        if(!response.ok){
          throw new Error(`HTTP error! Status:${response.status}`);
        }else{
          response.json();
        }
      })
      .then((data)=>{
        resolve(data);
      })
      .catch((error)=>{
        reject(error);
      })
    })
  };

  useEffect(()=>{
    fetchData(1).then((data)=>{
      console.log("MyData:- ",data);
    }).catch((error)=>{
      console.log("MyError:- ",error);
    })
  },[]); */



  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Odd Main! InPlay
      </h1>
    </div>
  )
}

export default App