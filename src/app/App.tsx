import { Input, InputCheckbox, InputRadio } from './components/form-ui';

function App() {
  return (
    <div className="h-screen w-full bg-blue-100">
      <Input type={"text"} placeholder={'Email'} />
      <InputCheckbox label={'Check'} name={'Check'} />
      <InputRadio label={'Radio'} name={'Radio'} />
    </div>
  );
}

export default App;
