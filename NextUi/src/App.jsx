
import {Button} from '@nextui-org/react'
import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';
import './App.css'

function App() {

  return (
    <>
    <div>
      <Button>Click me</Button>
    </div>
    <div className="flex gap-x-4">
      <Calendar aria-label="Date (No Selection)" />
      <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2020-02-03")} />
    </div>
    </>
  )
}

export default App
