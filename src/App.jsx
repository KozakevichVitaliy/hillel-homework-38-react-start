
import { Button } from './components/Button'
import { Input } from './components/Input'
import { onButtonClick } from './listeners/buttonListener'
import { onInputChange } from './listeners/inputListener'

function App() {
  return (
    <>
      <Input text="text" placeholder="Enter text" onChange={onInputChange} />
      <Button text="Click me" type="button" onClick={onButtonClick}/>
    </>
  )
}

export default App
