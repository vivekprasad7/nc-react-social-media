import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

// export const posts = [
//   {
//     _id: 121,
//     content:
//       "doing what you like to do is a treasure, not everyone is fortunate enough to have that freedom. specially in career terms, it mostly decides your everyday happiness and mental health!",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     comments: [],
//     username: "aryashah",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: 122,
//     content: "🎨💡 Tailwind CSS in 20 tweets! Retweet to help everyone in your network. Get ready for mind-blowing code snippets that will supercharge your web design. From responsive grids to stylish buttons, we got you covered. Lets dive into the world of Tailwind CSS!",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     comments: [],
//     username: "joey",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: 124,
//     content: "Hello Everyone! Meet My New Friend.",
//     postImg: "https://cataas.com/cat/cute",
//     postAlt: "Cute Cat",
//     likes: {
//       likeCount: 4,
//       likedBy: [
//         {
//           _id: "M1NR81Bzlz",
//           firstName: "Joey",
//           lastName: "Tibbiani",
//           username: "joeytribbiani",
//           profileAvatar:
//             "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
//         },
//       ],
//       dislikedBy: [],
//     },
//     username: "aryashah",
//     createdAt: "2023-06-17T01:06:00+05:30",
//     updatedAt: "2023-06-17T01:06:00+05:30",
//     comments: [
//       {
//         _id: "M1NR81Bzlz98765",
//         comment: "Eager to meet her!",
//         firstName: "Joey",
//         lastName: "Tribbiani",
//         username: "joey",
//         profileAvatar:
//           "https://randomuser.me/api/portraits/men/9.jpg",
//         createdAt: "2023-06-17T01:06:00+05:30",
//         updatedAt: "2023-06-17T01:06:00+05:30",
//       },
//     ],
//   },
// ];

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "aryashah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 121213,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 1013,
    content: "Hello Everyone!",
    postImg: "https://cataas.com/cat/cute",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joeytribbiani",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryashah",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz98765",
        comment: "Eager to hear your performance!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },
];