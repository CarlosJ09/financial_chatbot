import { Router } from "express";
import { sendMessageController } from "@/controllers/wa";

const router = Router();

router.post("/sendMessage", sendMessageController);

export { router };
