import ReactDOM from "react-dom/client";
import { App } from "./components/app/App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

export const queryClient = new QueryClient();
const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
