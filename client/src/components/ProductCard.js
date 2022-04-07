import react from "react";

export default function ProductCard(props){
    console.log(props.data);
    return(
        <div>
            <h1>hai</h1>
          {/* {view.loading?<h1>Loading</h1>:
          view.users.result.map((e)=>{
            return(
            <Container className="mt-5">
              <Row className="my-4">
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={e.item_image} />
                    <Card.Body>
                    <Card.Title>{e.item_name}</Card.Title>
                    <Card.Text>
                      {e.item_description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          )})
          } */}
        </div>
        )
}