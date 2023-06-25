import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Arya",
    lastName: "Shah",
    username: "aryashah",
    password: "aryashah123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "Prasad",
    username: "nxvivek",
    password: "nxvivek123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
