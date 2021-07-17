import zan from "../images/zan.jpg";
import kawjaw from "../images/kawjaw.jpg";
import firn from "../images/firn.jpg";
import program from "../images/program.jpg";
import pupz from "../images/pupz.jpg";

export const contacts = [
  {
    id: "1",
    name: "zantaclaus",
    section: "Frontend Developer",
    image: zan,
    facebook: "https://www.facebook.com/zantacluse/",
    ig: "https://www.instagram.com/zantaclaus/",
    github: "https://github.com/zantaclaus",
  },
  {
    id: "2",
    name: "Kawjaw",
    section: "Grader Developer",
    image: kawjaw,
    facebook: "https://www.facebook.com/isara.phadungprasertkul/",
    ig: "https://www.instagram.com/_kjisp/",
    github: "https://github.com/SroLyQ",
  },
  {
    id: "3",
    name: "imfirn",
    section: "Frontend Designer",
    image: firn,
    facebook: "https://www.facebook.com/firnkenk/",
    ig: " https://github.com/Kunkanit",
    github: "https://github.com/Kunkanit",
  },
  {
    id: "4",
    name: "program",
    section: "DevOps + Server Sponsor",
    image: program,
    facebook: "https://www.facebook.com/gm.gerdchai",
    ig: "https://www.instagram.com/gmbehappy/",
    github: "https://github.com/GmBeHappy",
  },
  {
    id: "5",
    name: "Mepupz",
    section: "Backend Developer",
    image: pupz,
    facebook: "https://www.facebook.com/profile.php?id=100006211907417",
    ig: "https://www.instagram.com/pupz._malaewja/",
    github: "https://github.com/Pupppppxz",
  },
];

export function getContacts() {
  return contacts.filter((i) => i);
}
