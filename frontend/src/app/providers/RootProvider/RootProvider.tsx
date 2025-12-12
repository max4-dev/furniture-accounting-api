import { QueryProvider } from "../QueryProvider/QueryProvider"
import { RouterProvider } from "../RouterProvider/RouterProvider"

export const RootProvider = () => {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  )
}