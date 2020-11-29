import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { NotFoundMessage404 } from "./styles";
//import { BlockContainer } from "../../styles/global";

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Header>Seu encurtador de URL</Header>
          
        </Container>
      </>
    );
  }
}

export default NotFoundPage;
