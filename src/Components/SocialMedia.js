import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faMedium
} from "@fortawesome/free-brands-svg-icons/";

import React from "react";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <a
        href="https://twitter.com/kris_nit"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/radhakrishnan-kanagaraj/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://medium.com/@radhakrishnan.nit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
      >
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>
      <a
        href="https://github.com/krisnit/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
};

export default SocialMedia;
