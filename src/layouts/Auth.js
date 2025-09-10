import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/react";

// Import routes
import routes from "routes.js";

export default function Pages(props) {
  const { ...rest } = props;
  
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Box>
      <Box w="100%" minH="100vh">
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/auth" to="/auth/signin" />
        </Switch>
      </Box>
    </Box>
  );
}