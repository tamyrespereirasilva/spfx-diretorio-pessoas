import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import * as React from 'react';
import AppDiretorioPessoas from "./AppDiretorioPessoas";

export interface AppProps {
  context: WebPartContext;
}
-65
const App: React.FC<AppProps> = (props: AppProps) => {

  return (
    <FluentProvider theme={webLightTheme}>
      {" "}
      <AppDiretorioPessoas
      description='teste'
      isDarkTheme={false}
      environmentMessage=''
      hasTeamsContext={false}
      userDisplayName=''
      />{" "}
    </FluentProvider>
  );
};

export default App;
