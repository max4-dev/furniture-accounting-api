import { RootLayout } from "@/app/layout/RootLayout/RootLayout";
import { HomePage } from "@/pages/home/ui";
import { BrowserRouter, Route, Routes } from "react-router";

export const RouterProvider = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)}