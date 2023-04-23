import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const About = () => {
  return (
    <>
      <div className="about">hi</div>
      <Container className="about">
        <Card className="mb-2">
          <Card.Header>Know Us</Card.Header>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>I am a frontend devloper</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
