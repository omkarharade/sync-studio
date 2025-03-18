import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductTable = () => {
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedSubCategory, setSelectedSubCategory] = useState(null);
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/products/get-categories")
			.then((res) => setCategories(res.data.data))
			.catch((err) => console.error(err));
	}, []);

	const fetchSubCategories = (category) => {
		axios
			.get(
				`http://localhost:5000/api/products/sub-categories?category=${category}`
			)
			.then((res) => setSubCategories(res.data.data))
			.catch((err) => console.error(err));
	};

	const fetchTableData = (subCategory) => {
		axios
			.get(
				`http://localhost:5000/api/products/sub-category?subCategory=${subCategory}`
			)
			.then((res) => {
        console.log("res.data.data  === ", res.data.data);
        setTableData(res.data.data)})
			.catch((err) => console.error(err));
	};

	console.log("categories", categories);
	console.log("subcategories", subCategories);
  console.log("table-data", tableData);

	return (
		<div className="flex h-screen">
			<div className="w-1/4 bg-gray-100 p-4">
				<h2 className="text-xl font-bold mb-4">Categories</h2>

				{categories.map((category, index) => (
					<div key={index}>
						<button
							className="w-full text-left p-2 bg-gray-200 rounded hover:bg-gray-300"
							onClick={() => {
								setSelectedCategory(category);
								fetchSubCategories(category);
							}}
						>
							{category}
						</button>

						{/* Dropdown logic fix */}
						{selectedCategory === category && subCategories.length > 0 && (
							<div className="pl-4 mt-2">
								{subCategories.map((sub, idx) => (
									<button
										key={idx}
										className="w-full text-left p-2 bg-gray-300 rounded hover:bg-gray-400"
										onClick={() => {
											setSelectedSubCategory(sub);
											fetchTableData(sub);
										}}
									>
										{sub}
									</button>
								))}
							</div>
						)}
					</div>
				))}
			</div>

			<div className="w-3/4 p-4">
				{selectedSubCategory ? (
					<>
						<h2 className="text-xl font-bold mb-4">
							{selectedSubCategory} Products
						</h2>
						<table className="w-full border-collapse border border-gray-300">
							<thead>
								<tr className="bg-green-500 text-white">
									<th className="border p-2">Part No.</th>
									<th className="border p-2">Datasheet Link</th>
									<th className="border p-2">VDSS V</th>
									<th className="border p-2">VGS V</th>
									<th className="border p-2">VTH Min V</th>
									<th className="border p-2">VTH Max V</th>
									<th className="border p-2">ID(A) / TA=25</th>
									<th className="border p-2">VTH(V) Max</th>
									<th className="border p-2">Ron 4.5V (mΩ) Max</th>
									<th className="border p-2">Ron 10V (mΩ) Max</th>
								</tr>
							</thead>
							<tbody>
								{tableData && tableData.length > 0 ? (
									tableData.map((item, index) => (
										<tr key={index} className="border">
											<td className="border p-2">{item.partNo}</td>
											<td className="border p-2">
												<a
													href={item.datasheetLink}
													className="text-blue-500 underline"
												>
													Link
												</a>
											</td>
											<td className="border p-2">
												{item.vdss?.value ? item.vdss.value : "-"}
											</td>
											<td className="border p-2">
												{item.vgs?.value ? item.vgs.value : "-"}
											</td>
											<td className="border p-2">
												{item.vthMin?.value ? item.vthMin.value : "-"}
											</td>
											<td className="border p-2">
												{item.vthMax?.value ? item.vthMax.value : "-"}
											</td>
											<td className="border p-2">
												{item.idByTA25?.value ? item.idByTA25.value : "-"}
											</td>
											<td className="border p-2">
												{item.vthVMax?.value ? item.vthVMax.value : "-"}
											</td>
											<td className="border p-2">
												{item.ron4_5V?.value ? item.ron4_5V.value : "-"}
											</td>
											<td className="border p-2">
												{item.ron10V?.value ? item.ron10V.value : "-"}
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan="10" className="text-center p-4">
											No data available
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</>
				) : (
					<p>Select a sub-category to see products.</p>
				)}
			</div>
		</div>
	);
};

export default ProductTable;
