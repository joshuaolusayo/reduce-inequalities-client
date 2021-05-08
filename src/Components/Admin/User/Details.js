import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import ProfileInfo from "../../Profile/ProfileInfo";

const Details = () => {
	const [selected, setSelected] = useState("");
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Chinese Score",
			dataIndex: "chinese",
			sorter: {
				compare: (a, b) => a.chinese - b.chinese,
				multiple: 3,
			},
		},
		{
			title: "Math Score",
			dataIndex: "math",
			sorter: {
				compare: (a, b) => a.math - b.math,
				multiple: 2,
			},
		},
		{
			title: "English Score",
			dataIndex: "english",
			sorter: {
				compare: (a, b) => a.english - b.english,
				multiple: 1,
			},
		},
		{
			title: "Update",
			dataIndex: "update",
		},
		{
			title: "Delete",
			dataIndex: "Delete",
		},
	];

	const data = [
		{
			key: "1",
			name: "John Brown",
			chinese: 98,
			math: 60,
			english: 70,
			update: "<Link>Delete</Link>"
		},
		{
			key: "2",
			name: "Jim Green",
			chinese: 98,
			math: 66,
			english: 89,
		},
		{
			key: "3",
			name: "Joe Black",
			chinese: 98,
			math: 90,
			english: 70,
		},
		{
			key: "4",
			name: "Jim Red",
			chinese: 88,
			math: 99,
			english: 89,
		},
	];

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	useEffect(() => {}, [selected]);

	return (
		<div className="col-lg-9 dashboard py-lg-5 px-lg-5">
			<h2 className="font-weight-bold mb-4 mb-lg-5">User Details</h2>
			<div className="row px-lg-3">
				<div className="d-flex justify-content-between align-items-center w-100">
					<div className="d-flex justify-content-between align-items-center">
						<div className="form-group mb-0">
							<select className="form-control" name="user" id="user">
								<option>All users</option>
								<option>State</option>
								<option>Id</option>
							</select>
						</div>
						<div
							className={`justify-content-between align-items-center ${
								selected === "state" || selected === "id" ? "d-flex" : "d-none"
							}`}
						>
							<div className="form-group mb-0">
								<input
									type="text"
									className="form-control"
									name="state"
									id="state"
									placeholder={
										selected === "state"
											? "Enter the name of the state"
											: selected === "id"
											? "Enter the id of the person"
											: ""
									}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
					<Link to="/signup">Add new users</Link>
				</div>
			</div>
			<div className="row px-lg-3">
				<div className="table-responsive my-5">
					<Table columns={columns} dataSource={data} onChange={onChange} />
					{/* <table class="table table-striped table-inverse">
						<thead class="thead-inverse">
							<tr>
								<th>Name</th>
								<th>Name</th>
								<th>Name</th>
								<th>Name</th>
								<th>Name</th>
								<th>Update</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>
									<Link to="/admin/user">Edit</Link>
								</td>
							</tr>
							<tr>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>
									<Link to="/admin/user">Edit</Link>
								</td>
							</tr>
							<tr>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>This is the heading</td>
								<td>
									<Link to="/admin/user">Edit</Link>
								</td>
							</tr>
						</tbody>
					</table> */}
				</div>
			</div>
			<div>
				<ProfileInfo />
			</div>
		</div>
	);
};

export default Details;
