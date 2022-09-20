export default function Card(props) {
    return (
        <>
            {props.obj.map((i)=> <div><img src={i.foto} /><p>{i.prodNome}</p><p>{i.prodPreco}</p></div>)}
        </>
    )
}