/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import SidebarOptions from "./components/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./Sidebar.css";
import { useDataLayerValue } from "./context/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    console.log("Check My Playlist", playlists);
  }, []);
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
        className="sidebar__logo"
      />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
