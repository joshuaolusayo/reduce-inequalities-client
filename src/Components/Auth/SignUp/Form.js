import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import LocalGovt from "../../../localGovt";

const RegistrationForm = ({ setAuth }) => {
	console.log(LocalGovt);
	const onFinish = async (values) => {
		console.log("Received values of form: ", values);
		try {
			const response = await fetch("http://localhost:5000/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			const parseResponse = await response.json();
			localStorage.setItem("token", parseResponse.token);
			if (parseResponse) {
				localStorage.setItem("isAuthenticated", true);
				window.location.pathname = "/";
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="container-fluid registration user-login px-0 px-lg-auto">
			<div className="row mx-0">
				<div
					className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center fixed"
					style={{
						background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/man-with-phone.jpg")',
					}}
				>
					<h3 className="text-center text-light">Fill the form to register and unlock the pathway to countless opportunities.</h3>
				</div>
				<div
					className="col-lg-6 registration__form d-flex justify-content-center bg-pry-light align-items-center"
					// style={{ background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url("/assets/globe-img.jpg")' }}
				>
					<div className="col-sm-8 col-lg-10">
						<Formik
							initialValues={{ email: "", password: "", state: "" }}
							validationSchema={Yup.object({
								email: Yup.string().email("Invalid email address").required("Required"),
								password: Yup.string().required("Enter your password"),
								state: Yup.string().required("Choose your state of origin"),
							})}
							onSubmit={(values, { setSubmitting }) => {
								console.log(values);
								onFinish(values);
								setSubmitting(false);
							}}
						>
							<Form>
								<div className="mb-3">
									<Field name="email" type="email" className="w-100 border-0 px-3 rounded py-1" placeholder="Email" />
									<br />
									<span className="text-danger">
										<ErrorMessage name="email" />
									</span>
								</div>

								<div className="mb-3">
									<Field name="state" as="select" className="w-100 border-0 px-3 rounded py-1">
										{LocalGovt.map(({ state }) => {
											return (
												<option key={state.id} value={state.name}>
													{state.name}
												</option>
											);
										})}
									</Field>
								</div>

								<div className="mb-3">
									<Field
										name="password"
										type="password"
										className="w-100 border-0 px-3 rounded py-1"
										placeholder="Password"
									/>
									<br />
									<span className="text-danger">
										<ErrorMessage name="password" />
									</span>
								</div>

								<Link to="/login" className="login-form-forgot mb-2">
									Forgot password
								</Link>

								<button type="submit" className="login-form-button btn bg-pry text-white">
									Register
								</button>
							</Form>
						</Formik>
						<p className="text-center">
							Already have an account? <Link to="/login">Log in</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <Form
	name="normal_login"
	className="login-form"
	initialValues={{
		remember: true,
	}}
	onFinish={onFinish}
>
	<Form.Item
		name="email"
		rules={[
			{
				required: true,
				message: "Please input your email!",
			},
		]}
	>
		<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
	</Form.Item>
	<Form.Item
		name="state"
		rules={[
			{
				required: true,
				message: "Please input your state!",
			},
		]}
	>
		<Select
			showSearch
			placeholder="Select a state"
			optionFilterProp="children"
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onSearch={onSearch}
			filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
			className="w-100"
		>
			<Option value="Abia">Abia</Option>
			<Option value="Adamawa">Adamawa</Option>
			<Option value="Akwa Ibom">Akwa Ibom</Option>
			<Option value="Anambra">Anambra</Option>
			<Option value="Bauchi">Bauchi</Option>
			<Option value="Bayelsa">Bayelsa</Option>
			<Option value="Benue">Benue</Option>
			<Option value="Borno">Borno</Option>
			<Option value="Cross Rive">Cross River</Option>
			<Option value="Delta">Delta</Option>
			<Option value="Ebonyi">Ebonyi</Option>
			<Option value="Edo">Edo</Option>
			<Option value="Ekiti">Ekiti</Option>
			<Option value="Enugu">Enugu</Option>
			<Option value="FCT">Federal Capital Territory</Option>
			<Option value="Gombe">Gombe</Option>
			<Option value="Imo">Imo</Option>
			<Option value="Jigawa">Jigawa</Option>
			<Option value="Kaduna">Kaduna</Option>
			<Option value="Kano">Kano</Option>
			<Option value="Katsina">Katsina</Option>
			<Option value="Kebbi">Kebbi</Option>
			<Option value="Kogi">Kogi</Option>
			<Option value="Kwara">Kwara</Option>
			<Option value="Lagos">Lagos</Option>
			<Option value="Nasarawa">Nasarawa</Option>
			<Option value="Niger">Niger</Option>
			<Option value="Ogun">Ogun</Option>
			<Option value="Ondo">Ondo</Option>
			<Option value="Osun">Osun</Option>
			<Option value="Oyo">Oyo</Option>
			<Option value="Plateau">Plateau</Option>
			<Option value="Rivers">Rivers</Option>
			<Option value="Sokoto">Sokoto</Option>
			<Option value="Taraba">Taraba</Option>
			<Option value="Yobe">Yobe</Option>
			<Option value="Zamfara">Zamfara</Option>
		</Select>
	</Form.Item>
	<Form.Item
		name="password"
		rules={[
			{
				required: true,
				message: "Please input your Password!",
			},
		]}
	>
		<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
	</Form.Item>

	<Form.Item>
		<Button type="primary" htmlType="submit" className="login-form-button">
			Register
		</Button>
	</Form.Item>
</Form>; */
}

export default RegistrationForm;
