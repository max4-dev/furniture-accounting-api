import { RootLayout } from "@/app/layout/RootLayout/RootLayout";
import { CalculatorPage } from "@/pages/calculator/ui/CalculatorPage/CalculatorPage";
import { HomePage } from "@/pages/home/ui";
import { CreateMaterialPage } from "@/pages/material/ui/CreateMaterialPage/CreateMaterialPage";
import { EditMaterialPage } from "@/pages/material/ui/EditMaterialPage/EditMaterialPage";
import { MaterialsPage } from "@/pages/material/ui/MaterialsPage/MaterialsPage";
import { CreateProductTypePage } from "@/pages/product-type/ui/CreateProductTypePage/CreateProductTypePage";
import { EditProductTypePage } from "@/pages/product-type/ui/EditProductTypePage/EditProductTypePage";
import { ProductTypesPage } from "@/pages/product-type/ui/ProductTypesPage/ProductTypesPage";
import { CreateProductWorkshopPage } from "@/pages/product-workshop/ui/CreateProductWorkshopPage/CreateProductWorkshopPage";
import { EditProductWorkshopPage } from "@/pages/product-workshop/ui/EditProductWorkshopPage/EditProductWorkshopPage";
import { ProductWorkshopsPage } from "@/pages/product-workshop/ui/ProductWorkshopsPage/ProductWorkshopsPage";
import { CreateProductPage, EditProductPage } from "@/pages/product/ui";
import { CreateWorkshopPage } from "@/pages/workshop/ui/CreateWorkshopPage/CreateWorkshopPage";
import { EditWorkshopPage } from "@/pages/workshop/ui/EditWorkshopPage/EditWorkshopPage";
import { WorkshopsPage } from "@/pages/workshop/ui/WorkshopsPage/WorkshopsPage";
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

        <Route path="workshops" element={<WorkshopsPage />} />
        <Route path="create-workshop" element={<CreateWorkshopPage />} />
        <Route path="workshops/edit/:id" element={<EditWorkshopPage />} />

        <Route path="workshops" element={<WorkshopsPage />} />
        <Route path="create-workshop" element={<CreateWorkshopPage />} />
        <Route path="workshops/edit/:id" element={<EditWorkshopPage />} />

        <Route path="product-workshops" element={<ProductWorkshopsPage />} />
        <Route path="create-product-workshop" element={<CreateProductWorkshopPage />} />
        <Route path="product-workshops/edit/:id" element={<EditProductWorkshopPage />} />

        <Route path="calculator" element={<CalculatorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)}