
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const { PrismaClient } = require("@prisma/client");

const setupAndStartServer = async () => {
	// create the express object

    const prisma = new PrismaClient();

	const app = express();
    app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use("/api", ApiRoutes);

	app.listen(PORT, async () => {
		console.log(`Server started at ${PORT}`);
	});
};

setupAndStartServer();