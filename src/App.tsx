import React from "react";
import { Layout } from "./Components/Layout";
import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
