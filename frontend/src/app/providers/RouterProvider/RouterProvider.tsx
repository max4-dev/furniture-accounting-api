import { RootLayout } from "@/app/layout/RootLayout/RootLayout";
import { HomePage } from "@/pages/home/ui";
import { CreateMaterialPage } from "@/pages/material/ui/CreateMaterialPage/CreateMaterialPage";
import { EditMaterialPage } from "@/pages/material/ui/EditMaterialPage/EditMaterialPage";
import { MaterialsPage } from "@/pages/material/ui/MaterialsPage/MaterialsPage";
import { CreateProductTypePage } from "@/pages/product-type/ui/CreateProductTypePage/CreateProductTypePage";
import { EditProductTypePage } from "@/pages/product-type/ui/EditProductTypePage/EditProductTypePage";
import { ProductTypesPage } from "@/pages/product-type/ui/ProductTypesPage/ProductTypesPage";
import { CreateProductPage, EditProductPage } from "@/pages/product/ui";
import { BrowserRouter, Route, Routes } from "react-router";

export const RouterProvider = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
        <Route path="product-types" element={<ProductTypesPage />} />
        <Route path="create-product-type" element={<CreateProductTypePage />} />
        <Route path="product-types/edit/:id" element={<EditProductTypePage />} />
        <Route path="materials" element={<MaterialsPage />} />
        <Route path="create-material" element={<CreateMaterialPage />} />
        <Route path="materials/edit/:id" element={<EditMaterialPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)}