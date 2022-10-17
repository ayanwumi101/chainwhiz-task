import { useState, createContext } from 'react'
import './App.css'
import Message from './components/Message'
import {Flex, Box} from '@chakra-ui/react'
import Card from './components/Card'
import Form from './components/Form'


export const FormContext = createContext();

function App() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <Box className="App" maxW='100%' margin={'auto'}>
      <FormContext.Provider value={{ cardName, cardNumber, month, year, cvv, setCardName, setCardNumber, setMonth, setYear, setCvv }} >
      <Flex justifyContent={'space-around'} alignItems='center' flexWrap={'wrap'} mt={{base: 0, lg: 9}}>
          <Card />
          <Form /> 
      </Flex>
      </FormContext.Provider>
    </Box>
  )
}

export default App
