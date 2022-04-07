import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { TambahActions,KurangActions } from "../redux/actions/hitungActions";
import { getAllBarang } from "../redux/actions/getBarangActions";
import { Card,Button,Container,Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function Cart(){
    const dispatch = useDispatch()
    const display = useSelector(state=>state.getBarangReducers)
    const view = display
    useEffect(()=>{
       dispatch( getAllBarang())
    },[])

    
    return(
    <div>
      
        <Container className="mt-5">
          <ProductCard data='hai'/>
          <Row className="my-4">
          {view.loading?<h1>Loading</h1>:
      view.users.result.map((e)=>{
        return(
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
                  )})
                }
          </Row>
        </Container>

    </div>
    )
}