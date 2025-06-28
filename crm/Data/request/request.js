import axios from "axios";
const url = "https://jruppzeeitolijrgbvyx.supabase.co/storage/v1";
export const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydXBwemVlaXRvbGlqcmdidnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTU4OTMsImV4cCI6MjA2MTY3MTg5M30.ketuojkkbbH6V_l0PnhRF7_Z87sTzb1Tf_Px8KchdTU";
export const getCobins = async function () {
  const respond = await axios.get(
    "https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/cobin?select=*",
    {
      headers: {
        apikey: apikey,
        Authorization: "Bearer " + apikey,
      },
    }
  );
  return respond.data;
};

export const deletCobins = async function (id) {
  const respond = axios.delete(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/cobin?id=eq.${id}`,
    {
      headers: {
        Prefer: "return=minimal",
        apikey: apikey,
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydXBwemVlaXRvbGlqcmdidnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTU4OTMsImV4cCI6MjA2MTY3MTg5M30.ketuojkkbbH6V_l0PnhRF7_Z87sTzb1Tf_Px8KchdTU",
      },
    }
  );
  console.log(respond);
};
export const insertNewRow = async function (data) {
  const imageLoad = await uploadImage(data.image);
  if (imageLoad.status === 200) {
    data = { ...data, image: imageLoad.imageUrl };
    const respond = await axios.post(
      "https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/cobin",
      data,
      {
        headers: {
          Prefer: "return=minimal",
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
          apikey: apikey,
        },
      }
    );
    console.log(respond);
  } else {
    const respond = await axios.post(
      "https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/cobin",
      data,
      {
        headers: {
          Prefer: "return=minimal",
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
          apikey: apikey,
        },
      }
    );
    console.log(respond);
    return respond;
  }
};

export const uploadImage = async function (imageName) {
  console.log(imageName);
  const filename = (Date.now() + "_" + imageName.name).replaceAll("/", "");
  const formData = new FormData();
  formData.append("file", imageName);
  for (let pair of formData.entries()) {
    console.log(pair[0] + ":", pair[1]);
  }
  const respond = await axios.post(
    `https://jruppzeeitolijrgbvyx.supabase.co/storage/v1/object/cobins-image/${filename}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${apikey}`,
        apikey: apikey,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  const signedUrlResponse = await axios.post(
    "https://jruppzeeitolijrgbvyx.supabase.co/storage/v1/object/sign/cobins-image/" +
      filename,
    {
      expiresIn: 6000,
    },
    {
      headers: {
        Authorization: `Bearer ${apikey}`,
        apikey: apikey,
      },
    }
  );
  return {
    imageUrl: url + signedUrlResponse.data.signedURL,
    status: respond.status,
    data: {
      path: `https://jruppzeeitolijrgbvyx.supabase.co/storage/v1/object/public/cobins-image/${filename}`,
      filename,
    },
  };
};
export const UpdateCobin = async function (id, value) {
  console.log("UpdateCobin ID:", id);
  console.log("UpdateCobin VALUE:", value);
  const respond = axios.patch(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/cobin?id=eq.${id}`,
    value,
    {
      headers: {
        Authorization: `Bearer ${apikey}`,
        apikey: apikey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    }
  );
  return respond;
};
