import Navigation from './context/Navigation';
import Container from "@material-ui/core/Container";
function App() {
  return (
    <div className="App">
      <div className="content-parent">
      <div className="side-menu" ></div>
      <Container>
        <Navigation />
      </Container>
    </div>
    </div>
  );
}

export default App;
