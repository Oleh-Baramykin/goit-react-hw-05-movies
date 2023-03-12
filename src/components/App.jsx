import { GlobStyle, Link, Header } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { MovieDitails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';

export const App = () => {
  return (
    <GlobStyle>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDitails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobStyle>
  );
};
