import express from "express";
import cors from "cors";
import { router } from "./routes";
import "dotenv/config";
import { waClient } from "@/config/wa";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

waClient.initialize();
