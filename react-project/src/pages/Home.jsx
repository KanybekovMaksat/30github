import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get('https://90bd69b27d9ba951.mokky.dev/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);СС

  return (
    <div>
      <h1>Список машин</h1>
      {cars.map((item, index) => (
        <div key={index} className='border w-[300px]'>
          <img src={item.photo} className='w-[270px] h-[200px] object-cover' alt="" />
          <h3 className="text-[teal]">
            {item.title} <span>Цена {item.price}</span>
          </h3>
          <p className='w-[270px]'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
