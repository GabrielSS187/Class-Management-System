import { ContextGlobalComponent } from "./shared/contexts/contextGlobal";
import { Routers } from "./routes/index";

import { GlobalStyles } from "./shared/styles/GlobalStyles";

function App() {
  return (
    <ContextGlobalComponent>
      <Routers />
      <GlobalStyles />
    </ContextGlobalComponent>
  );
};

export default App;