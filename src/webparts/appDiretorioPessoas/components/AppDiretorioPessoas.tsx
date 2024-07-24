import * as React from "react";
import styles from "./AppDiretorioPessoas.module.scss";
import type { IAppDiretorioPessoasProps } from "./IAppDiretorioPessoasProps";
import {
  Card,
  CardHeader,
  CardPreview,
  makeStyles,
  tokens,
  Text,
  Caption1,
  Button,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  card: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: { margin: "0" },
});

export default class AppDiretorioPessoas extends React.Component<
  IAppDiretorioPessoasProps,
  {}
> {
  public render(): React.ReactElement<IAppDiretorioPessoasProps> {
    const {} = this.props;
    const stylesFluenteUi = useStyles();
    return (
      <section>
        <div className={styles.welcome}>
          <section className={stylesFluenteUi.section}>
            <p>With image as part of preview</p>

            <Card className={stylesFluenteUi.card} orientation="horizontal">
              <CardPreview className={stylesFluenteUi.horizontalCardImage}>
                {/* <img
              className={styles.horizontalCardImage}
              src={resolveAsset("app_logo.svg")}
              alt="App Name Document"
            /> */}
              </CardPreview>

              <CardHeader
                header={<Text weight="semibold">App Name</Text>}
                description={
                  <Caption1 className={stylesFluenteUi.caption}>
                    Developer
                  </Caption1>
                }
                action={
                  <Button
                    appearance="transparent"
                    icon={<MoreHorizontal20Regular />}
                    aria-label="More options"
                  />
                }
              />
            </Card>
          </section>
        </div>
      </section>
    );
  }
}
