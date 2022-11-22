import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import Row from '../components/Row'
import { Movie } from '../movie-typing'
import request from '../utils/request'

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {

  console.log(netflixOriginals);

  return (
    <div>
      <Header />
      <main>
        <HeroSlider movies={netflixOriginals} />
        <Row genre={'Now Trending'} movies={trendingNow} />
        <Row genre={'Top Rated'} movies={topRated} />
        <Row genre={'Action Movies'} movies={actionMovies} />
        <Row genre={'Comedy Movies'} movies={comedyMovies} />
        <Row genre={'Romance Movies'} movies={romanceMovies} />
        <Row genre={'Horror Movies'} movies={horrorMovies} />
        <Row genre={'Documentaries'} movies={documentaries} />
      </main>
      <Footer />
    </div>
  )
}

export default Home

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(request.fetchNetflixOriginals).then((res) => res.json()),
    fetch(request.fetchTrending).then((res) => res.json()),
    fetch(request.fetchTopRated).then((res) => res.json()),
    fetch(request.fetchActionMovies).then((res) => res.json()),
    fetch(request.fetchComedyMovies).then((res) => res.json()),
    fetch(request.fetchHorrorMovies).then((res) => res.json()),
    fetch(request.fetchRomanceMovies).then((res) => res.json()),
    fetch(request.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}