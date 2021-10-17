import styled from "styled-components";

const Login = () =>{

const Container = styled.div`
  align-items: center;
  justify-content: center;
  color:red;
  height:100vh;
  display: flex;
`; 

const ContTitel = styled.div`
 display: flex;
 align-items:center;
 justify-content:center;
 font-size:30px;
 font-weight:300;
 margin-top:30px;
 margin-bottom:-140px;
 color:red;
 @media(max-width:340px){
  font-size:20px;
 }
`;
const Titel = styled.h1`
 font-weight: 300;
`;

const Login = styled.div`
 border: 1px solid red;
 padding: 40px;
 border-radius:20px;
 text-align: center;
`;

const Input = styled.input`
display:block;
padding: 4px;
margin: 15px;
border-radius: 5px;
border:0.1rem solid gray;
&::placeholder{
  color:red;
  font-size:10px;
  font-weight: bold;
}
&:focus{
  background-color:red;
  color:white;
}
`;
const P =styled.p`
text-align: left;
font-size: 10px;
margin-left: 15px;

`;
const Button = styled.button`
 background-color:red;
 border-radius: 20px;
 border: none;
 width: 50%;
 height: 25px;
 padding: 4px;
 color:white;
 margin-top: 20px;
 &:hover{
  background-color:white;
  border:1px solid red;
  
  color:red;
  }
`;

    return(
        <div>
        <ContTitel>
          <Titel>Center Shopping</Titel>
        </ContTitel>
      <Container>
          
         <Login>
           <Titel>Adimin</Titel>
           <Input placeholder="Usuario" className='usuario'/>
           <Input placeholder="Senha"/>
           <P> <a href="#top">reset password</a> </P>
           <Button className='button'>Login</Button>
         </Login>
        
      </Container>
    </div>
    )
}

export default Login ;