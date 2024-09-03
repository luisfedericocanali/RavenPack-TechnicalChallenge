import React from "react";
import AppStackNavigator from "./src/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStackNavigator />
    </QueryClientProvider>
  );
}
