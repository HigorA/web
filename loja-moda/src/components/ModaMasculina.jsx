import Card from "./Card";

export default function ModaMasculina() {

    const obj = [{'foto':'', 'prodNome':'', 'prodPreco':''}]

    return (
        <section>
            <h1>Moda Masculina</h1>
            <Card obj={obj}/>
        </section>
    )
}