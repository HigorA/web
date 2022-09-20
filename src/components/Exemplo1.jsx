export default function Exemplo1(props) {
    return (
        <div>
            <h2>Exemplo 1</h2>
            <p>Valor do Exemplo 1 : {props.numero}</p>
            <button onClick={()=> props.setNumero(props.numero + 1)}>Aumentar</button>
            <p>Este é o exemplo 1</p>
            <p>Elemento passado por props {props.nome}</p>
            {props.children}
        </div>
    )
}

/**
 *
 *   <h2>Exemplo 1</h2>
 *   <p>Valor do Exemplo 1 : {props.numero}</p>
 *   <button onClick={()=> props.setNumero(props.numero + 1)}>Aumentar</button>
 *   <p>Este é o exemplo 1</p>
 *   <p>Elemento passado por props {props.nome}</p>
 *   {props.children}
 */