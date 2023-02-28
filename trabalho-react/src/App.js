

//  import {useState , useEffect} from "react"

//  function App() {
//   const [prova1 , setProva1]= useState(0)
//   const somar = () => {
//     setProva1 (prova1 => prova1 + 2)
//   }
//   const subtrai = () => {
//     setProva1 (prova1 => prova1 - 2)
//   }
//   const [prova2 , setProva2]= useState(0)

//   let media = (prova1 + prova2)/2
//   let aprovação = media  >=7 ? 'Arpovado': "Reprovado"
  
//    return (
//      <div>
//             <input type="number" placeholder="Prova 1" onChange={e=>setProva1(parseFloat(e.target.value))}></input>
//             <input type="number" placeholder="Prova 2" onChange={e=>setProva2(parseFloat(e.target.value))}></input>
//             <h1>{aprovação} com {media}</h1>
//             <button onClick={somar}>Somar 1</button>
//             <button onClick={subtrai}>Subtrair 1</button>
            
//             <h1>{prova1}</h1>
//      </div>
//    );
//   }
 

// export default App;



import {useEffect , useState} from "react"
import './index.css'
 

function App() {
 const [valor , setValor]= useState(0)
 const [resultado,setResultado]=useState(0)
//  const [botoes , setBotoes]=useState([])
 
 //Operações
 const somar= () => {
  setResultado(parseFloat(resultado)  + parseFloat(valor))
  setValor('') 
 }
 const subtrair = () => {
  setResultado (parseFloat(resultado) - parseFloat(valor))
  setValor('')
 }
 const multiplicar = () => {
  setResultado (parseFloat(resultado) * parseFloat(valor))
  setValor('')
 }
 const dividir = () => {
  setResultado (parseFloat(resultado) / parseFloat(valor))
  setValor('')
 }
 const potencia = () => {
  setResultado (parseFloat(resultado) ** parseFloat(valor))
  setValor('')
 }
 const porcentagem = () => {
  setResultado (parseFloat(resultado)/100)
  setValor('')
 }
 
 const limpar=() => {
  setResultado(0)
  setValor('')
 }
//  function teste (id) { 
//   const valorAux = id
//   setBotoes ([...botoes,botoesAux])
  
  

 
 //Botões

 const button0 = () =>{
  setValor ([...valor , 0] )
 }
 const button1 = () =>{
  setValor ([...valor , 1] )
 }
 const button2 = () =>{
  setValor([...valor , 2] )
 }
 const button3 = () =>{
  setValor ([...valor , 3] )
 }
 const button4 = () =>{
  setValor ([...valor , 4] )
 }
 const button5 = () =>{
  setValor ([...valor ,5] )
 }
 const button6 = () =>{
  setValor ([...valor , 6] )
 }
 const button7 = () =>{
  setValor ([...valor , 7] )
 }
 const button8 = () =>{
  setValor([...valor , 8] )
 }
 const button9 = () =>{
  setValor ([...valor , 9] )
 }
 const buttonIgual = () => {
  setValor(resultado)
 }
 
 
 

  return (
    <div>
      <h1>{resultado}</h1>
      <input  id="valor" value={valor} onChange={(e) => setValor(e.target.value) } ></input>
 
          <table>
            <tr>
            <td> <button onClick={porcentagem}>%</button></td>
              <td><button onClick={dividir}> / </button></td>
              <td><button onClick={multiplicar}>*</button></td>
              <td><button onClick={potencia}> ^ </button></td>
            </tr>
            <tr>
            <td> <button onClick={button7}>7</button></td>
            <td> <button onClick={button8}>8</button></td>
            <td> <button onClick={button9}>9</button></td>
            <td> <button onClick={subtrair}>-</button></td>
            </tr>
            <tr>
            <td> <button onClick={button4}>4</button></td>
            <td> <button onClick={button5}>5</button></td>
            <td> <button onClick={button6}>6</button></td>
            <td> <button onClick={somar}>+</button></td>
            </tr>
            <tr>
            <td><button onClick={button1}>1</button></td>
            <td><button onClick={button2}>2</button></td>
            <td><button onClick={button3}>3</button></td>
            <td rowSpan="2"><button className="buttonigual" onClick={buttonIgual}>=</button></td>
            </tr>
            
            <tr>
            <td colSpan="2"><button className="button0" onClick={button0}>0</button></td>
            <td><button onClick={limpar}>C</button></td>
            
            </tr>
            {/* <button onClick={()=>teste(0)}>0</button>
            <button onClick={()=>teste(1)}>1</button>
            <button onClick={()=>teste(2)}>2</button>
            <button onClick={()=>teste(3)}>3</button>
            <button onClick={()=>teste(4)}>4</button>
            <button onClick={()=>teste(5)}>5</button>
            <button onClick={()=>teste(6)}>6</button>
            <button onClick={()=>teste(7)}>7</button>
            <button onClick={()=>teste(8)}>8</button>
            <button onClick={()=>teste(9)}>9</button> */}
          </table>

    </div>
  );

        }
export default App;

