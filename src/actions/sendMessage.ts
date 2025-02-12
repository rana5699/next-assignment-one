"use server";
export const sendMessage = async (data: FormData) => {
  const messageData = Object.fromEntries(data.entries());

  const res = await fetch(
    "https://blog-rest-api-self.vercel.app/api/messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    }
  );

  const messageInfo = await res.json();

  return messageInfo;
};
