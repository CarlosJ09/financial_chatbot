import { workflow } from "@/utils/workflow";
import { Client, LocalAuth } from "whatsapp-web.js";

export const waClient = new Client({ authStrategy: new LocalAuth() });

waClient.on("ready", () => console.log("WhatsApp client ready!"));
waClient.on("qr", (qr) => console.log("QR Code:", qr));

waClient.on("message_create", async (message) => {
  if (message.fromMe && message.to === "18294062525@c.us") {
    try {
      /* if (message.fromMe) return;
       */
      const response = await workflow.handleMessage(message.body, message.from);
      await waClient.sendMessage(message.from, response);
    } catch (error) {
      console.error("Error handling message:", error);
      await waClient.sendMessage(message.from, "Something went wrong. Please try again later.");
    }
    console.log("Message received:", message.body);
  }
});
