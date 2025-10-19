import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { AuthPage } from "@/pages/AuthPage";
import { ArticleReadPage } from "@/pages/ArticleReadPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ROUTES } from "@/shared/config";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route path={ROUTES.ARTICLE_READ} element={<ArticleReadPage />} />
        <Route path={ROUTES.ARTICLE_EDIT} element={<ArticleEditPage />} />
      </Routes>
    </>
  );
};