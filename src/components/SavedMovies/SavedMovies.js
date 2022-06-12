import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([
    {
      _id: 1,
      movieId: 1,
      nameRU: "«Роллинг Стоунз» в изгнании",
      nameEN: "Stones in Exile",
      director: "Стивен Кайак ",
      country: "США",
      year: "2010",
      duration: 61,
      description:
        "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
      trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
      image: "https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
      thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
      owner: 1,
    },
    {
      _id: 2,
      movieId: 2,
      nameRU: "All Tomorrow's Parties",
      nameEN: "All Tomorrow's Parties",
      director: " Джонатан Кауэтт",
      country: "Великобритания",
      year: "2009",
      duration: 82,
      description:
        "Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.",
      trailerLink: "https://www.youtube.com/watch?v=D5fBhbEJxEU",
      image: "https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg",
      thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg",
      owner: 1,
    },
    {
      _id: 3,
      movieId: 3,
      nameRU: " Без обратного пути",
      nameEN: "No Distance Left to Run",
      director: "Уилл Лавлейс, Дилан Сотерн",
      country: "Великобритания",
      year: "2010",
      duration: 104,
      description:
        "Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.",
      trailerLink: "https://www.youtube.com/watch?v=6iYxdghpJZY",
      image:  "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg",
      thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_blur_a43fcf463d.jpeg",
      owner: 1,
    },
  ]);

  const searchHandler = ({ query, check }) => {
    console.log("поиск по базе фильмов");
  };

  const deleteMovieHandler = (movieId) => {
    console.log('удалить фильм', movieId);
  }

  return (
    <>
      <Header mixClass="app__wrapper app__header">
        <BurgerMenu>
          <Navigation mixClass="navigation_burger">
            <li className="navigation__item navigation__item_place_burger  navigation__item_hide_notebook">
              <Link
                to="/"
                className="navigation__link navigation__link_place_burger"
              >
                Главная
              </Link>
            </li>
            <li className="navigation__item navigation__item_place_burger">
              <Link
                to="/movies"
                className="navigation__link navigation__link_place_burger"
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__item navigation__item_place_burger">
              <Link
                to="/saved-movies"
                className="navigation__link navigation__link_place_burger navigation__link_active"
              >
                Сохранённые фильмы
              </Link>
            </li>
          </Navigation>
        </BurgerMenu>
      </Header>
      <main className="app__movie movies" aria-label="Сохраненые фильмы">
        <SearchForm onSubmit={searchHandler} />
        <MoviesCardList movies={savedMovies} nameKey="_id" onDeleteMovie={deleteMovieHandler} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
