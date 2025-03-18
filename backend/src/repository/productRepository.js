const express = require("express");
const multer = require("multer");
const fs = require("fs");
const readline = require("readline");
const fastCsv = require("fast-csv");
const { PrismaClient } = require("@prisma/client");
const { formatValue } = require("../utils/formatTableValues");

const prisma = new PrismaClient();

class ProductRepository {

    Omega = '\u03A9';

	columnName = {
		category: "Category",
		subCategory: "Sub-category",
        partNumber: "Part No.",
		datasheetLink: "Datasheet Link (PDF)",
		vdss: "VDSS\r\nV",
		vgs: "VGS\r\nV",
		vthMin: "VTH\r\nMin\r\nV",
		vthMax: "VTH\r\nMax\r\nV",
		idByTA25: "ID(A) / TA=25",
		vthVMax: "VTH(V) Max.",
		ron4_5V: `Ron 4.5v\n(mΩ)Max.`,
		ron10V: `Ron 10v\n(mΩ)Max.`,
	};


	uploadProductData(filePath) {
		try {
			let products = [];
			let vdss = [],
				vgs = [],
				vthMin = [],
				vthMax = [],
				idByTA25 = [],
				vthVMax = [],
				ron4_5V = [],
				ron10V = [];


			fs.createReadStream(filePath)
				.pipe(fastCsv.parse({ headers: true }))
				.on("data", (row) => {
                    
                    const partNo = row[this.columnName.partNumber]

					products.push({
						partNo: row[this.columnName.partNumber],
						category: row[this.columnName.category],
						subCategory: row[this.columnName.subCategory],
						datasheetLink: row[this.columnName.datasheetLink],
					});

					if (row[this.columnName.vdss] && row[this.columnName.vdss] !== "")
						vdss.push({
							partNo,
							value: formatValue(row[this.columnName.vdss]),
						});
					if (row[this.columnName.vgs] && row[this.columnName.vgs] !== "")
						vgs.push({ partNo, value: formatValue(row[this.columnName.vgs]) });
					if (row[this.columnName.vthMin] && row[this.columnName.vthMin] !== "")
						vthMin.push({
							partNo,
							value: formatValue(row[this.columnName.vthMin]),
						});
					if (row[this.columnName.vthMax] && row[this.columnName.vthMax] !== "")
						vthMax.push({
							partNo,
							value: formatValue(row[this.columnName.vthMax]),
						});
					if (
						row[this.columnName.idByTA25] &&
						row[this.columnName.idByTA25] !== ""
					)
						idByTA25.push({
							partNo,
							value: formatValue(row[this.columnName.idByTA25]),
						});
					if (
						row[this.columnName.vthVMax] &&
						row[this.columnName.vthVMax] !== ""
					)
						vthVMax.push({
							partNo,
							value: formatValue(row[this.columnName.vthVMax]),
						});
					if (
						row[this.columnName.ron4_5V] &&
						row[this.columnName.ron4_5V] !== ""
					)
						ron4_5V.push({
							partNo,
							value: formatValue(row[this.columnName.ron4_5V]),
						});
					if (row[this.columnName.ron10V] && row[this.columnName.ron10V] !== "")
						ron10V.push({
							partNo,
							value: formatValue(row[this.columnName.ron10V]),
						});
				})

				.on("end", async () => {

					console.log("columnName == ", this.columnName);
					console.log("products == ", products);
					console.log("vdss == ", vdss);
					console.log("vgs == ", vgs);
					console.log("vthMin == ", vthMin);
					console.log("vthMax == ", vthMax);
					console.log("idByTA25 == ", idByTA25);
					console.log("vthVMax == ", vthVMax);
					console.log("ron4_5V == ", ron4_5V);
					console.log("ron10V == ", ron10V);
                    console.log("prisma == ", prisma)

					await prisma.products.createMany({
						data: products,
						skipDuplicates: true,
					});
					await prisma.vDSS.createMany({ data: vdss, skipDuplicates: true });
					await prisma.vGS.createMany({ data: vgs, skipDuplicates: true });
					await prisma.vTHMin.createMany({
						data: vthMin,
						skipDuplicates: true,
					});
					await prisma.vTHMax.createMany({
						data: vthMax,
						skipDuplicates: true,
					});
					await prisma.iDByTA25.createMany({
						data: idByTA25,
						skipDuplicates: true,
					});
					await prisma.vTHVMax.createMany({
						data: vthVMax,
						skipDuplicates: true,
					});
					await prisma.ron4_5VMax.createMany({
						data: ron4_5V,
						skipDuplicates: true,
					});
					await prisma.ron10VMax.createMany({
						data: ron10V,
						skipDuplicates: true,
					});
				});

		} catch (error) {
			console.log(
				"Something went wrong in the product Repository when uploading csv data"
			);
			throw { error };
		}
	}
}

module.exports = ProductRepository;
