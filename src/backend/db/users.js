import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "0c489f60-3f1e-498b-ad52-9bb8c73bb069",
    firstName: "Arya",
    lastName: "Shah",
    username: "aryashah",
    password: "aryashah123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/women/27.jpg",
    status:"Amazing",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "675bc919-36f5-4cab-9d38-b3ea430533e1",
    firstName: "Joey",
    lastName: "Tribbiani",
    username: "joey",
    password: "joey123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/men/2.jpg",
    status:"Joey doesn't share food!",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "03081a87-0207-4e39-bbd8-70bc8de598b5",
    firstName: "Chandler",
    lastName: "Bing",
    username: "chandler",
    password: "chandler123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/men/3.jpg",
    status:"Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "28795253-5970-4ef3-98a1-e0bb07178cb9",
    firstName: "Phoebe",
    lastName: "Buffay",
    username: "phoebe",
    password: "phoebe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/women/4.jpg",
    status:"I wish I could, but I don't want to.",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "a4f70207-521d-402c-af19-f4565119a8b8",
    firstName: "Ross",
    lastName: "Geller",
    username: "ross",
    password: "ross123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/men/88.jpg",
    status:"Unagi Is A Total State Of Awareness.",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "aa4a87b7-5d50-4223-a292-d4c417e1e33e",
    firstName: "Monica",
    lastName: "Geller",
    username: "monica",
    password: "monica123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/women/5.jpg",
    status:"I'm the boss of this kitchen!",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "85007e7a-6926-4bcd-8100-42dc55f60765",
    firstName: "Rachel",
    lastName: "Green",
    username: "rachel",
    password: "rachel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://randomuser.me/api/portraits/women/9.jpg",
    status:"Okay Hi.",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: "8bab9d4a-0233-47ae-abe7-699cc5014863",
    firstName: "Bad",
    lastName: "Girl",
    username: "badgirl",
    password: "badgirl123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://cataas.com/cat?type=sq",
    status:"I will find you and ignore you.",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "Prasad",
    username: "nxvivek",
    password: "nxvivek123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic:"https://res.cloudinary.com/darl8idou/image/upload/v1688972177/Cardz/pp1_exknth.png",
    status:"Sab se peeche hum khade",
    website:"",
    followers:[],
    following:[],
    bookmarks:[],
  },
];
