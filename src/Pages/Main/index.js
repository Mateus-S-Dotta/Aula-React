import { useEffect, useState } from 'react';
import './styles.css';
import api from '../../Services/api';
import MovieCard from '../../Components/MovieCard'

function Main() {
  const [users, setUsers] = useState({
    results: [0]
  });

  async function loadApi() {
    try {
      const response = await api.get('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
      setUsers(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadApi();
  }, []);

  function openModal(id) {

  }

  return (
    <div className='main'>
      <input type='text' className='main-input' />
      <div className='main-movies'>
        <h1 className='main-h1'>{'<'}</h1>
        {users.results.map((element, index) => {
          if (index > 4) {
            return
          }
          return (
            <MovieCard
              key={index + 1}
              photo={element.poster_path}
              title={element.original_title}
              note={element.vote_average}
              onClick={() => openModal(index + 1)}
            />
          )
        })}
        <h1 className='main-h1'>{'>'}</h1>
      </div>

    </div>
  )
}

export default Main;