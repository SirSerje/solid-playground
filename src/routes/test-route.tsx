import {onMount} from "solid-js";
import {createSignal, For} from "solid-js";
import style from './style.module.scss'
interface Item {
  name: string;
  id: number;
}
export default function TestRoute () {
  let reference: HTMLInputElement;
  let id = 0;
  const [items, setItems] = createSignal<Item[]>([])

  onMount(async () => {
    setTimeout(() => console.log('log mount with delay'), 100)
  })

  const removeItem = (id: number) => {
    setItems(a => a.filter(i => i.id!==id))
  }

  const data: number = 15;
  const handler = (data: string, event: any) => {
    setItems(a => [...a, {name: reference.value, id}])
    reference.value = ''
    id++
  }

 return <div>
   <input
     ref={reference}
     onChange={(e) => {
       console.log(reference.value)
     }}
   />
   <button onClick={[handler]}>Click Me</button>
   <br></br>
   <For each={items()}>{(item) => <div class={style.element}>item: {item.name} {id}<button
   onClick={(e) => {removeItem(item.id)}}

   >X</button> </div>}</For>
 </div>
}
