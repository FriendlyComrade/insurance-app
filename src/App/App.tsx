import HeaderBlock from 'src/components/HeaderBlock';
import Main from 'components/Main';
import Footer from 'components/Footer';
import './App.scss';
import Wrapper from 'src/components/Wrapper';

//Wrapper width: 1050px;

function App():JSX.Element {
  return (
    <div className="App">
      <HeaderBlock/>
      <Wrapper>
        <Main/>
        <Footer/>
      </Wrapper>
    </div>
  );
}

export default App;
