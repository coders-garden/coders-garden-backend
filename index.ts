import express, { Express, Request, Response } from "express";
import membersRoute from "./routes/members";
import cors from "cors";

const corsOptions = {
	origin: "*",
};

cors(corsOptions);

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
	return res.status(200).send({
		status: true,
		data: "Hello World",
		message: "Success",
	});
});

app.use("/members", membersRoute);

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});