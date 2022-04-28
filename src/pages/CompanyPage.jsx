import { Container, Button } from "../ui-kit";

export default function CompanyPage() {
  return (
    <Container>
      <h1>ui</h1>
      <Button>Test</Button>
      <Button disabled>Test</Button>
      <Button bgWhite>Test</Button>
      <Button bgWhite disabled>
        Test
      </Button>
    </Container>
  );
}
