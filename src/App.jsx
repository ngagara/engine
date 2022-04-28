import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage/BooksPage";
import EditPage from "./pages/EditPage";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import { NEW_BOOK } from "./constants";

const MOCK = [
  // {
  //   id: 1,
  //   name: "Преступный маг",
  //   src:
  //     "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  // }
];

export default function App() {
  const [isPaper, setPaper] = useState([]);
  //Проверка на Новую книгу
  const [disabledButton, setDisabledButton] = useState(false);
  const [hiddenButton, sethiddenButton] = useState(true);

  useEffect(() => {
    if (MOCK.length === 0) {
      setPaper((prev) => [...prev, { ...NEW_BOOK }]);
      sethiddenButton(false);
    } else {
      sethiddenButton(true);
      setPaper(MOCK);
    }
  }, []);

  // Проверка на Новую книгу, пока не закончишь старую нельзя создать новую
  useEffect(() => {
    isPaper.forEach((paper) => {
      paper.name === "Новая книга"
        ? setDisabledButton(true)
        : setDisabledButton(false);
    });
  }, [isPaper]);

  const handelAddNewBook = () => {
    setPaper((prev) => {
      let prevId = prev[prev.length - 1].id;
      return [...prev, { ...NEW_BOOK, id: (prevId += 1) }];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<CompanyPage />} />
        <Route
          path="books"
          element={
            <BooksPage
              handelAddNewBook={handelAddNewBook}
              hiddenButton={hiddenButton}
              isPaper={isPaper}
              disabledButton={disabledButton}
            />
          }
        />
        <Route path="books/:id" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
