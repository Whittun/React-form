import "./App.css";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(4, `Должно содержать не менее 4 символов`),
  age: z.number({ message: "Нужно указать число" }),
  email: z.string().email("Нужно указать почту"),
  phoneNumber: z.number({ message: "Нужно указать номер телефона" }),
  childName: z.string().min(4, `Должно содержать не менее 4 символов`),
  childAge: z.number({ message: "Нужно указать число" }),
});

console.log(schema.parse({ name: "anam", age: "s" }));

function App() {
  return <></>;
}

export default App;
