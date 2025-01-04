import { waClient } from "@/config/wa";

export const sendMessage = async (to: string, message: string) => {
  waClient.sendMessage(`${to}@c.us`, message);

  const data = { to, message };
  return data;
};
