import { Router } from "express";
import { connectToWhatsappController, sendMessageController } from "@/controllers/wa";

const router = Router();

router.post("/connect", connectToWhatsappController);
router.post("/sendMessage", sendMessageController);

export { router };
