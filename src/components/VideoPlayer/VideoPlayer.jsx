import React from "react";

import Strings from "../../constants/strings";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ closePlayer, src }) => {
  return (
    <div className={styles.video}>
      <button onClick={closePlayer}>{Strings.close}</button>
      <video controls autoPlay src={src} />
    </div>
  );
};

export default VideoPlayer;
