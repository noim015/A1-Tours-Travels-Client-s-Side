import { Container, Row } from 'react-bootstrap';
import usePackages from '../../../hooks/usePackages';
import Course from '../../Package/Package';
import './Services.css';

const Services = () => {
    
    const { displayProducts } = usePackages();
    
return (
    <div>
        <Container>
            <Row>
                <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }} >Our Tours & Travels Packages</h1>
            </Row>
            <Row>
            {displayProducts?.slice(0,6).map((course) => (
                <Course course={course} key={course._id}></Course>
                
            ))}
            </Row>
        </Container>
    </div>
);
};

export default Services;