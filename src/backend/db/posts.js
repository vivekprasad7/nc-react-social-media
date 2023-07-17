import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

// /**
//  * Posts can be added here.
//  * You can add default posts of your wish with different attributes
//  * */

export const posts = [
  {
    _id: uuid(),
    content:
      "The main thing in life is to keep the main thing, main thing.",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        text: "2 different socks, but same thing!!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profilePic:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-05-17T01:06:00+05:30",
        updatedAt: "2023-05-17T01:06:00+05:30",
      },
      {
        _id: uuid(),
        text: "So many things, I am confused!!",
        firstName: "Phoebe",
        lastName: "Buffay",
        username: "phoebe",
        profilePic:
          "https://randomuser.me/api/portraits/women/22.jpg",
        createdAt: "2023-05-17T01:06:00+05:30",
        updatedAt: "2023-05-17T01:06:00+05:30",
      },
    ],
    username: "aryashah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: 'Being willing to ask dumb questions is a superpower. Often by far the fastest way to get oriented in a new domain, and though perhaps counterintuitive, experts tend to love it when people genuinely want to learn about their passion area.',
    likes: {
      likeCount: 21,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "joey",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Hello Everyone! Meet My New Friend.",
    postImg: "https://cataas.com/cat/cute",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 29,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profilePic:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryashah",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Eager to meet her!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: 'Replaced 120 lines of code with just 15 lines. Reduced load time by about 20%',
    likes: {
      likeCount: 71,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        text: "Replaced 10,000 lines of code with one line. Table uda diya bc!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      }
    ],
    username: "ross",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "If you feel stupid looking at your peers doing amazing things on twitter, chances are that you are. That's the tweet.",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550194/Cardz/posts/p6_cvr5uy.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 57,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profilePic:
            "https://randomuser.me/api/portraits/men/9.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryashah",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Hawwww!",
        firstName: "Monica",
        lastName: "Geller",
        username: "monica",
        profilePic:
          "https://randomuser.me/api/portraits/women/25.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Reading is a protest against the insufficiencies of life.",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550194/Cardz/posts/p2_eyeueo.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 987,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryashah",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Deep Insight this!!",
        firstName: "Rachel",
        lastName: "Green",
        username: "rachel",
        profileAvatar:
          "https://randomuser.me/api/portraits/women/28.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },


  {
    _id: uuid(),
    content: "Deep Insight",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550194/Cardz/posts/p5_ir1tmk.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 17,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profilePic:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rachel",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Shut Up!",
        firstName: "Arya",
        lastName: "Shah",
        username: "aryashah",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },


  {
    _id: uuid(),
    content: "I just want to break up with you",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550194/Cardz/posts/p3_hfjvzc.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 28,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler",
          profilePic:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryashah",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Cute!",
        firstName: "Ross",
        lastName: "Geller",
        username: "ross",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/19.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Farewell",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550194/Cardz/posts/p1_cxnjut.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 74,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "chandler",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Please die!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Hi, Mark!",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550194/Cardz/posts/p4_pkckta.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 9,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joeytribbiani",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "chandler",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "I can easily beat him in thumb wrestling!",
        firstName: "Ross",
        lastName: "Geller",
        username: "ross",
        profilePic:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Do you like it now?",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550195/Cardz/posts/p7_c2uwqa.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 357,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "phoebe",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "hehe",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Please dont leave.",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550195/Cardz/posts/p9_jsase6.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 42,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joeytribbiani",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "phoebe",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Aww!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Where's the lie?",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550195/Cardz/posts/p10_oyl4gs.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 812,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joeytribbiani",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "monica",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Hui Hui",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Bhaiya Ball Dedo!",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550196/Cardz/posts/p15_lugsf7.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 121,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joeytribbiani",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "ross",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Nahi!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Walking in nature!.",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550196/Cardz/posts/p11_sawqmo.jpg",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 88,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joeytribbiani",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "ross",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Beauty!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },

  {
    _id: uuid(),
    content: "Feels like Heaven!",
    postImg: "https://res.cloudinary.com/darl8idou/image/upload/v1689550197/Cardz/posts/p21_clustz.png",
    postAlt: "Cute Cat",
    likes: {
      likeCount: 612,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Joey",
          lastName: "Tibbiani",
          username: "joey",
          profileAvatar:
            "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "ross",
    createdAt: "2023-02-17T01:06:00+05:30",
    updatedAt: "2023-02-17T01:06:00+05:30",
    comments: [
      {
        _id: uuid(),
        text: "Nice!",
        firstName: "Joey",
        lastName: "Tribbiani",
        username: "joey",
        profileAvatar:
          "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },
];
