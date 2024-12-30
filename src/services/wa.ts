import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client({ authStrategy: new LocalAuth() });

export const connectToWhatsapp = async () => {
  client.on("ready", () => {
    console.log("Client is ready!");
  });

  client.on("qr", (qr: any) => {
    qrcode.generate(qr, { small: true });
  });

  client.initialize();
};

export const sendMessage = async (to: string, message: string) => {
  client.sendMessage(`${to}@c.us`, message);

  return { to, message };
};
