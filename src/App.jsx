import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import theme from "theme/theme.js";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/rtl`} component={RTLLayout} />
          <Redirect from={`/`} to="/admin/dashboard" />
        </Switch>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;