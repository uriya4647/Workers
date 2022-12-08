import img1 from "../staticPicture/pic1.jpg";
import img2 from "../staticPicture/pic2.webp";
import img3 from "../staticPicture/pic3.jpg";
import img4 from "../staticPicture/pic4.jpg";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";

const Avatars = ({ name }) => {
  const arrayPicture = ["", img1, img2, img3, img4];

  const randomPicture = () => {
    return arrayPicture[Math.floor(Math.random() * arrayPicture.length)];
  };

  // function that returns the capial letter of the first name and the capital letter the last name.
  const avatarLetters = () => {
    let avaterName =
      name.indexOf(" ") < 0
        ? name.charAt(0).toUpperCase()
        : name.charAt(0).toUpperCase() +
          name.charAt(name.indexOf(" ") + 1).toUpperCase();

    return avaterName;
  };

  return (
    <Avatar
      sx={{ bgcolor: red[500] }}
      aria-label="recipe"
      src={randomPicture()}
      onClick={randomPicture}
    >
      {avatarLetters()}
    </Avatar>
  );
};
export default Avatars;

Avatar.propTypes = {
  name: PropTypes.string,
};
