import {Data, MyImage, ActionAlert} from './profile/Profile';

function App() {
  const myStyle = {color:'#d4ffe6', fontSize: 15, fontWeight: 400, 
    backgroundColor: "#282c34", textAlign: "center", border:"solid 6px blue"};
  const handleName = e => {
    e.preventDefault();
    alert("Rabeb");
  };
  return (
    <>
    <header style={myStyle}>
      <Data fullName ="Rabeb JAOUANI"  profession="informaticienne"></Data>
      <MyImage>picture</MyImage>
      <br></br>
      <ActionAlert handleName={handleName}></ActionAlert>
    </header>
    </>
  );
}

export default App;
