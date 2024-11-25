import React from 'react';
import Cabecalho from '../otherComponents/Cabecalho';
import Footer from '../otherComponents/Footer';
import { useCart } from "../contexts/CartContext";
import { Button, Card, ListGroup, Row, Col, Container } from 'react-bootstrap'; // Importando os componentes do React Bootstrap

const ShoppingCart = () => {
  const { cartItems, addToCart, removeOneFromCart, finalizePurchase } = useCart();

  return (
    <>
      <Cabecalho />
      <div className="min-h-screen bg-light">
        <Container className="pt-5">
          <Row className="justify-content-center">
            {/* Aumentei a largura do Card para ocupar praticamente toda a tela */}
            <Col lg={11} md={10} xs={12} className="mb-4"> {/* Aumentei o lg para 11 e md para 10 */}
              <Card className="shadow-lg">
                <Card.Header className="text-center bg-primary text-white py-4">
                  <h2>Carrinho de Compras</h2>
                </Card.Header>
                <Card.Body className="py-5"> {/* Aumentei o padding interno */}
                  {cartItems.length === 0 ? (
                    <p className="text-center text-muted">Seu carrinho está vazio</p>
                  ) : (
                    <>
                      <ListGroup variant="flush">
                        {cartItems.map((item) => (
                          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center py-4">
                            <div>
                              <h5 className="mb-2">{item.name}</h5>
                              <p className="text-muted">
                                Qtd: {item.quantity} x R${item.price.toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <Button
                                variant="success"
                                size="sm"
                                onClick={() => addToCart(item)}
                                className="mx-2"
                              >
                                +
                              </Button>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeOneFromCart(item.id)}
                                className="mx-2"
                              >
                                -
                              </Button>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>

                      <div className="border-top mt-5 pt-4">
                        <Row className="mb-4">
                          <Col xs={6}>
                            <strong>Total:</strong>
                          </Col>
                          <Col xs={6} className="text-right">
                            <strong>
                              R$
                              {cartItems
                                .reduce(
                                  (total, item) => total + item.price * item.quantity,
                                  0
                                )
                                .toFixed(2)}
                            </strong>
                          </Col>
                        </Row>
                        <Button
                          variant="primary"
                          size="lg"  
                          className="w-100 py-3"  
                          onClick={finalizePurchase}
                        >
                          Finalizar Compra
                        </Button>
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
