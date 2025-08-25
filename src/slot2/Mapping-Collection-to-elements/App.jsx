const array = ["Flutter, gay, nigga, homo, dog, fat"];

const object = {
    Flutter: 1,
    gay: 4,
    nigga: 55,
    homo: 5,
    dog: 4,
    fat: 5
};
const App = () => {
    return (
        <section>
            <h2>Array demo</h2>
            <ul>
                {array.map((i) => (<li key={i}>{i}</li>))}
            </ul>
            <h2>Object demo</h2>
            <ul>
                {Object.keys(object).map((i) => (<li key={i}><strong>{i}</strong>: {object[i]}</li>))}
            </ul>
        </section>
    )
}

export default App;
