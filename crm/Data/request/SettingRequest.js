import axios from "axios";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydXBwemVlaXRvbGlqcmdidnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTU4OTMsImV4cCI6MjA2MTY3MTg5M30.ketuojkkbbH6V_l0PnhRF7_Z87sTzb1Tf_Px8KchdTU";
export const getSetting = async function () {
  const response = await axios.get(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/setting?select=*`,
    {
      headers: {
        apikey: apikey,
        Authorization: "Bearer" + apikey,
      },
    }
  );
  return response.data;
};

export const UpdateSettig = async function (id, value) {
  const response = await axios.patch(
    `https://jruppzeeitolijrgbvyx.supabase.co/rest/v1/setting?id=eq.${id}`,
    value,
    {
      headers: {
        apikey: apikey,
        Authorization: "Bearer" + apikey,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    }
  );
  return response.data;
};
