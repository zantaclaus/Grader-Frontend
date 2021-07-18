import zan from "../images/zan.jpg";
import kawjaw from "../images/kawjaw.jpg";
import firn from "../images/firn.jpg";
import program from "../images/program.jpg";
import pupz from "../images/pupz.jpg";
import boom from "../images/boom.jpg";
import onn from "../images/onn.jpg";
import james from "../images/james.jpg";

export const contacts = [
  {
    id: "1",
    name: "imfirn",
    section: "Frontend Designer",
    image: firn,
    facebook: "https://www.facebook.com/firnkenk/",
    ig: " https://github.com/Kunkanit",
    github: "https://github.com/Kunkanit",
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
    name: "program",
    section: "DevOps",
    image: program,
    facebook: "https://www.facebook.com/gm.gerdchai",
    ig: "https://www.instagram.com/gmbehappy/",
    github: "https://github.com/GmBeHappy",
  },
  {
    id: "4",
    name: "zantaclaus",
    section: "Frontend Developer",
    image: zan,
    facebook: "https://www.facebook.com/zantacluse/",
    ig: "https://www.instagram.com/zantaclaus/",
    github: "https://github.com/zantaclaus",
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
  {
    id: "6",
    name: "Boom",
    section: "Technical Consultant",
    image: boom,
    facebook: "https://www.facebook.com/Sirisap.Siripattanakul",
    ig: "https://www.instagram.com/s_pattanakul/",
    github: "https://github.com/Sirisap22",
  },
  {
    id: "7",
    name: "Onn",
    section: "Database",
    image: onn,
    facebook: "https://m.facebook.com/churairat.onn",
    ig: "https://www.instagram.com/charonyx_/",
    github: "https://github.com/Charonyx",
  },
  {
    id: "8",
    name: "James",
    section: "Database",
    image: james,
    facebook: "https://www.facebook.com/chanon.tem",
    ig: "https://www.instagram.com/james.crunzex/",
    github: "https://github.com/CRUNZEX",
  },
];

export function getContacts() {
  return contacts.filter((i) => i);
}
