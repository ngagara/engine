import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage/BooksPage";
import EditPage from "./pages/EditPage/EditPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import AppLayout from "./pages/AppLayout";
import { NEW_BOOK, SIDEBAR_MENU } from "./constants";

const MOCK = [
  {
    id: 1,
    name: "Преступный маг",
    src:
      "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function App() {
  const [isPapers, setPaper] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);
  const [hiddenButton, setHiddenButton] = useState(true);

  useEffect(() => {
    if (MOCK.length === 0) {
      setPaper((prev) => [...prev, { ...NEW_BOOK }]);
      setHiddenButton(false);
    } else {
      setHiddenButton(true);
      setPaper(MOCK);
    }
  }, []);

  const handelAddNewBook = () => {
    if (isPapers[isPapers.length - 1].name === "Новая книга") {
      setDisabledButton(true);
    } else {
      setPaper((prev) => {
        let prevId = prev[prev.length - 1].id;
        return [...prev, { ...NEW_BOOK, id: (prevId += 1) }];
      });
    }
  };

  return (
    <Routes>
      <Route path="/" element={<h1>NOLOG</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AppLayout />}>
        <Route
          path="books"
          element={
            <BooksPage
              handelAddNewBook={handelAddNewBook}
              hiddenButton={hiddenButton}
              isPapers={isPapers}
              disabledButton={disabledButton}
            />
          }
        />
        <Route path="books/:id/*" element={<EditPage isPapers={isPapers} />}>
          {SIDEBAR_MENU &&
            SIDEBAR_MENU.map((route) => (
              <Route key={route.id} path={route.path} element={route.name} />
            ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
