import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const AllArticles = () => {
	const [selected, setSelected] = useState("");
	const [text, setText] = useState("");
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
					<table className="table table-striped table-inverse">
						<thead className="thead-inverse">
							<tr>
								<th>S/N</th>
								<th>Title</th>
								<th>Date Posted</th>
								<th>Author</th>
								<th>Update</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>This is the title</td>
								<td>Nov 20, 2020</td>
								<td>Aderimi Adeoye</td>
								<td>
									<Link to="/admin/user">Edit</Link>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>This is the title</td>
								<td>Nov 20, 2020</td>
								<td>Aderimi Adeoye</td>
								<td>
									<Link to="/admin/user">Edit</Link>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>This is the title</td>
								<td>Nov 20, 2020</td>
								<td>Aderimi Adeoye</td>
								<td>
									<Link to="/admin/user">Edit</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<ReactQuill value={text} onChange={(e) => setText(e.value)} />
		</div>
	);
};

export default AllArticles;
