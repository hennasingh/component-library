import Badge from './components/Badge'
import './App.css'

function App() {

  return (
    <main>
      <h1>Badges</h1>
      <section>
        <h2>Square</h2>
        <Badge style="square" variant="gray"/>
        <Badge style="square" variant="red" />
        <Badge style="square" variant="yellow" />
        <Badge style="square" variant="green" />
        <Badge style="square" variant="blue" />
        <Badge style="square" variant="indigo" />
        <Badge style="square" variant="purple" />
        <Badge style="square" variant="pink" />
      </section>
      <section>
        <h2>Pill</h2>
        <Badge style="pill" variant="gray"/>
        <Badge style="pill" variant="red" />
        <Badge style="pill" variant="yellow" />
        <Badge style="pill" variant="green" />
        <Badge style="pill" variant="blue" />
        <Badge style="pill" variant="indigo" />
        <Badge style="pill" variant="purple" />
        <Badge style="pill" variant="pink" />
      </section>
    </main>
  )
}

export default App
