import { Col, Row } from "react-bootstrap";
import PageHeader from "../../layouts/PageHeader/PageHeader";
import GlobaisEAmbientais from "./sections/GlobaisEAmbientais";
export default function Dashboard() {
  return (
    <div>
      <PageHeader componentName='Dashboard 01' staticName='Home' activePage='Dashboard 01' />
      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={12} md={12} sm={12} xl={12}>
              <GlobaisEAmbientais />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
