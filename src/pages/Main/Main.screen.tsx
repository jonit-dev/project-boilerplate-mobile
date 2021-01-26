import React from "react";
import { useParams } from "react-router";

import { NotFoundContainer } from "../../components/SideMenu/NotFoundContainer";
import { SideMenuPage } from "../../components/SideMenu/SideMenuPage";
import { FeedScreen } from "./Feed/Feed.screen";
import { SettingsScreen } from "./Settings/Settings.screen";

export const MainScreen: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  switch (name) {
    case "Feed":
      return <FeedScreen />;

    case "Settings":
      return <SettingsScreen />;

    default:
      return (
        <SideMenuPage>
          <NotFoundContainer name={name} />
        </SideMenuPage>
      );
  }
};
