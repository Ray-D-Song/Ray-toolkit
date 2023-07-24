import { createSignal } from 'solid-js'
import * as clipboard from 'clipboard-polyfill'

function App() {

  const [strConfig, setStrConfig] = createSignal({
    len: 0,
    type: 1
  })
  
  const createStr = () => {
    clipboard.writeText(String(strConfig().len)).then(()=>{
    })
  }

  const options = [
    {label: '纯数字', value: 1},
    {label: '纯字母', value: 2},
    {label: '数字字母组合', value: 3}
  ]

  return (
    <>
      <div class="h-8 my-3 mx-4">
        <span>生成</span>
        <input value={strConfig().len} onChange={e => setStrConfig({...strConfig(), len: Number(e.currentTarget.value)})} class="w-8 mx-2 bg-slate-600 text-white rounded-sm h-6"/>
        <span>个字符的</span>
        <select value={strConfig().type} onChange={e => setStrConfig({...strConfig(), type: Number(e.currentTarget.value)})} class="mx-2 w-36 bg-slate-600 text-gray-200 h-6 rounded-sm">
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
        </select>
        <button onClick={createStr} class="bg-sky-600 rounded-md w-14">复制</button>
      </div>
      <div class="h-8 my-3 mx-4">
        <button onClick={createStr} class="bg-sky-600 rounded-md w-24 h-6">生成手机号</button>
      </div>
    </>
  )
}

export default App