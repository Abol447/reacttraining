import axios from "axios";
import { apikey } from "./request";
import { getAccessToken } from "../../functions/localStorage";

import { supabase } from "./supabaseClient";

export const logIn = async function (email, password) {
  try {
    const response = await axios.post(
      `https://jruppzeeitolijrgbvyx.supabase.co/auth/v1/token?grant_type=password`,
      {
        email,
        password,
      },
      {
        headers: {
          apikey: apikey,
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logOutRec = async function () {
  const response = await axios.post(
    `https://jruppzeeitolijrgbvyx.supabase.co/auth/v1/logout`,
    {},
    {
      headers: {
        apikey: apikey,
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  console.log(response);
};

export const SingUpReq = async function (info) {
  const response = await axios.post(
    `https://jruppzeeitolijrgbvyx.supabase.co/auth/v1/signup`,
    info,
    {
      headers: {
        apikey: apikey,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
};

export const UpdateUserReq = async function (info) {
  console.log(getAccessToken());
  const response = await axios.put(
    "https://jruppzeeitolijrgbvyx.supabase.co/auth/v1/user",
    info,
    {
      headers: {
        apikey: apikey,
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  console.log(response);
};

// export const UpdateUserReq = async (info) => {
//   const { data, error } = await supabase.auth.updateUser(info);
//   if (error) {
//     console.error("Failed to update user:", error);
//     throw error;
//   }
//   console.log("User updated:", data);
//   return data;
// };
