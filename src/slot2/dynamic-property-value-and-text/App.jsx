
const enabled = false;
const text = 'A button';
const placeholder = 'input value ....'
const size = 50;

const App = () => {
    return (
        <section>
            <section>
                <button disabled={!enabled}>{text}</button>
                <input placeholder={placeholder} size={size}></input>
            </section>
        </section>
    )
}

export default App;
