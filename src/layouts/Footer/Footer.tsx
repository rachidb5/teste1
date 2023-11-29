import React from 'react';
import {Link} from "react-router-dom"
import{Row,Col, Container} from "react-bootstrap"
const Footer = () => {
return(
<div className="footer">
			<Container>
				<Row className="align-items-center flex-row-reverse">
					<Col className="text-center" sm={12} md={12} lg={12}>
					</Col>
				</Row>
			</Container>
		</div>

);
}
  
export default Footer;
