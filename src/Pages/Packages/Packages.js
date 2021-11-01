import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackages from '../../hooks/usePackages';
import Package from '../Package/Package';


const Packages = () => {
    const { displayProducts } = usePackages();
    console.log(displayProducts);
    return (
        <div>
            <Container>
                <Row>
                    <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }}>Our Tour Packages</h1>
                </Row>
                <Row>
                {displayProducts?.map((course) => (
                    <Package course={course} key={course.key}></Package>
                ))}
                </Row>
            </Container>
        </div>
    );
};

export default Packages;