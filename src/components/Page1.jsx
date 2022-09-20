import { useState } from "react"

export default function Page1() {

    const [pessoa, setPessoa] = useState({'nome': '', 'idade': ''})

    function handlePessoa(e ) {
        setPessoa({...pessoa, [e.target.nome]:e.target.value})
    }

    return(
        <div>
            <h2>Page 1</h2>
            <p>Esta é a minha pagina 1</p>
        </div>
    )
}