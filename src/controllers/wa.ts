import { Request, Response } from "express";
import { connectToWhatsapp, sendMessage } from "@/services/wa";
import { handleHttp } from "@/utils/error-handler";

const connectToWhatsappController = async (_: Request, res: Response) => {
  try {
    await connectToWhatsapp();
    res.send({ message: "Connected to Whatsapp" });
  } catch (e) {
    handleHttp(res.status(500), "ERROR_CONNECT_TO_WHATSAPP", e);
  }
};

const sendMessageController = async ({ body }: Request, res: Response) => {
  try {
    const sendMessageToWhatsapp = await sendMessage(body?.to, body?.message);
    console.log(sendMessageToWhatsapp);
    
    res.send({ message: "Message sent to Whatsapp" });
  } catch (e) {
    handleHttp(res.status(500), `ERROR_SEND_MESSAGE_TO_WHATSAPP ${body?.to}`, e);
  }
};

export { connectToWhatsappController, sendMessageController };
