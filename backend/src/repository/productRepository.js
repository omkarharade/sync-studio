const express = require("express");
const multer = require("multer");
const fs = require("fs");
const fastCsv = require("fast-csv");
const { PrismaClient } = require("@prisma/client");
const { formatValue } = require("../utils/formatTableValues");

const prisma = new PrismaClient();

class ProductRepository {
	
    uploadProductData(filePath) {
		try {
			let products = [];
			fs.createReadStream(filePath)
				.pipe(fastCsv.parse({ headers: true }))
				.on("data", (row) => {
					products.push({
						category: formatValue(row["Category"]),
						subCategory: formatValue(row["Sub-category"]),
						partNo: formatValue(row["Part No."]),
						datasheetLink: formatValue(row["Datasheet Link (PDF)"]),
						vdssV: row["VDSS V"]
							? parseInt(formatValue(row["VDSS V"]))
							: formatValue(row["VDSS V"]),
						vgsV: row["VGS V"]
							? parseInt(formatValue(row["VGS V"]))
							: formatValue(row["VGS V"]),
						vthMinV: row["VTH Min V"]
							? parseInt(formatValue(row["VTH Min V"]))
							: formatValue(row["VTH Min V"]),
						vthMaxV: row["VTH Max V"]
							? parseInt(formatValue(row["VTH Max V"]))
							: formatValue(row["VTH Max V"]),
						idByTA25: row["ID(A) / TA=25"]
							? parseInt(formatValue(row["ID(A) / TA=25"]))
							: formatValue(row["ID(A) / TA=25"]),
						vthVMax: row["VTH(V) Max."]
							? parseInt(formatValue(row["VTH(V) Max."]))
							: formatValue(row["VTH(V) Max."]),
						ron4_5V_mOhmMax: row["Ron 4.5v (mΩ)Max."]
							? parseInt(formatValue(row["Ron 4.5v (mΩ)Max."]))
							: formatValue(row["Ron 4.5v (mΩ)Max."]),
						ron10V_mOhmMax: row["Ron 10v (mΩ)Max."]
							? parseInt(formatValue(row["Ron 10v (mΩ)Max."]))
							: formatValue(row["Ron 10v (mΩ)Max."]),
					});
				})
				.on("end", async () => {
					try {
						await prisma.products.createMany({
							data: products,
							skipDuplicates: true,
						});
						return "CSV data imported successfully";
					} catch (error) {
						console.error("Error inserting data:", error);
						throw { error };
					}
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
