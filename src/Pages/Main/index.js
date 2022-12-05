import { useEffect, useState } from 'react';
import './styles.css';
import api from '../../Services/api';
import MovieCard from '../../Components/MovieCard';
import Modal from '../../Components/Modal';

function Main() {
  //   const [filmesDoDia, setFilmesDoDia] = useState();
  //   const [filmesMostrando, setFilmesMostrando] = useState([[]]);
  //   const [filmesPesquisados, setFilmesPesquisados] = useState();

  // async function carregarApi() {
  //     try {
  //       const resposta = await api.get('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');
  //       const objetoLocal = [[resposta.data.results[0], resposta.data.results[1], resposta.data.results[2], resposta.data.results[3], resposta.data.results[4]],
  //       [resposta.data.results[5], resposta.data.results[6], resposta.data.results[7], resposta.data.results[8], resposta.data.results[9]],
  //       [resposta.data.results[10], resposta.data.results[11], resposta.data.results[12], resposta.data.results[13], resposta.data.results[14]],
  //       [resposta.data.results[15], resposta.data.results[16], resposta.data.results[17], resposta.data.results[18], resposta.data.results[19]]];
  //       setFilmesDoDia(objetoLocal);
  //       setFilmesMostrando(objetoLocal);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  // useEffect(() => {
  //   carregarApi();
  // }, []);

  return (
    <div className='main'>
      <h1>Hello World</h1>
    </div >
  )
}

export default Main;
