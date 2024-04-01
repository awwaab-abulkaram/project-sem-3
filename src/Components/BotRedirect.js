import React,{useEffect,useState} from 'react'
import Loader from './Loader';
import BotWeb from './BotWeb';

const BotRedirect = () => {
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    // Hide the loader after 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds
    
    return () => clearTimeout(timer); // Clear the timer when component unmounts
    }, []); // useEffect runs only once on component mount

  return (
    <div>
        {isLoading && <Loader />}
        <BotWeb className={isLoading ? 'hidden' : ''} />
    </div>
  )
  }

export default BotRedirect