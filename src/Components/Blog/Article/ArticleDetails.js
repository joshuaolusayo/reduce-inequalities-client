import React from "react";
import { Link } from "react-router-dom";
import { Row, Divider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Featured from "../Homepage/Featured";

const ArticleDetails = () => {
	return (
		<div className="latest container-fluid pt-5">
			<div className="container mx-auto px-0">
				<Row className="py-5 px-0">
					<div className="col-md-8 px-0 px-md-2">
						<h5 className="text-uppercase font-weight-bold mb-3">Important</h5>
						<div class="card border-0 shadow-sm">
							<img loading="lazy" class="card-img-top img_1" src="/assets/env.jpg" alt="alternative to be displayed" />
							<div className="tag bg-white text-pry px-3 py-2 shadow">Application</div>

							<div class="card-body">
								<p className="text-muted font-weight-bold">Nov 23, 2020</p>

								<h4 class="card-title font-weight-bold">Application details on this platform.</h4>

								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, totam reiciendis. Cumque velit libero
									animi magni numquam earum inventore delectus odit, esse aperiam? Reprehenderit hic iure autem aut ea
									harum quam doloribus! A consequuntur cumque quas omnis tempora odit et debitis voluptas nesciunt quidem!
									Omnis facilis quis, fuga hic id nulla sint! Adipisci voluptas magnam aperiam, quia tempore ut obcaecati
									molestias quisquam velit aliquam quam, placeat nostrum totam. Sequi sed sunt labore iure amet distinctio
									sapiente omnis repellat dolorum quod iste fuga, nobis velit, rerum illo cupiditate praesentium ullam
									culpa. Saepe, eaque impedit similique voluptatem consequatur quo error consectetur sit nobis
									perspiciatis hic alias, animi, distinctio molestias praesentium perferendis ratione pariatur qui quasi
									nisi at? Eveniet veritatis est sunt magnam saepe cumque quaerat eius aliquam ut. Harum laborum
									exercitationem cupiditate pariatur ratione. Delectus, explicabo distinctio doloremque asperiores quod
									praesentium beatae. Voluptatum minima ipsa autem necessitatibus nostrum amet consectetur nisi, ea
									praesentium iure. Similique possimus animi dolore enim provident culpa, fuga magnam, accusamus dolor
									ratione aspernatur doloremque pariatur mollitia quod obcaecati in id qui rerum ut sunt perferendis
									deserunt! Facere deserunt quis magnam corporis consectetur omnis vel nobis recusandae rerum
									exercitationem hic deleniti, voluptates cupiditate qui assumenda minima odit quae sequi dignissimos
									voluptas vero ipsam! Ipsam quibusdam, possimus nisi illo placeat tenetur. Hic dignissimos esse commodi,
									recusandae tenetur ducimus fugiat adipisci ipsa perferendis ut est repudiandae eos aspernatur at, beatae
									consectetur quaerat nihil vitae sequi explicabo. Qui sint laboriosam dolorum facilis ex possimus. Minima
									ad reiciendis illo sapiente molestiae velit repudiandae voluptas veritatis laudantium neque nulla beatae
									obcaecati, dolorum voluptate eos eum enim, maxime odit itaque? Illo modi fugiat deleniti itaque, quo in
									nobis natus, sapiente harum facilis est doloremque iure ab tempore corrupti exercitationem quos. Ad
									aperiam, cupiditate suscipit ea reprehenderit dicta quibusdam. Eaque molestiae incidunt praesentium
									neque aliquam molestias eligendi quaerat voluptatum doloribus quos perspiciatis sapiente sed, iste
									cupiditate distinctio nostrum odio ducimus. Odio debitis optio eius officiis quas illo nulla enim fugiat
									aspernatur minus molestias dicta doloremque, ab labore nisi incidunt suscipit. Ratione, numquam sequi
									facilis nemo sapiente iure deleniti ullam id! Quidem, corporis. Accusantium assumenda velit natus
									impedit tempore porro perspiciatis expedita quod est iste ratione, itaque nihil magnam omnis doloribus
									nisi eaque rerum ipsam laudantium asperiores repudiandae? Quibusdam magnam sapiente culpa nostrum
									explicabo, ducimus in numquam eum vel ipsum quo fugit maiores accusantium consequuntur, cum ad
									necessitatibus omnis maxime repellendus commodi dolores distinctio voluptates at? Ea?
								</p>

								<Link to="/blog/article">
									Read more <ArrowRightOutlined style={{ position: "relative", top: "-3px" }} />
								</Link>
							</div>
						</div>
					</div>
					<Featured />
				</Row>
			</div>
			<Divider className="mb-0" />
		</div>
	);
};

export default ArticleDetails;
