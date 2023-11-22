import Navigation from "./src/components/Navigation";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
