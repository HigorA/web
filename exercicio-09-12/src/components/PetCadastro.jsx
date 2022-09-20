import { useState } from "react";
import { DivEtiqueta } from "../styled.js";


export default function PetCadastro() {

    const [animal, setAnimal] = useState({'nome':'','raca':'','idade':'','sexo':'','dono':''});
    const [listaAnimal, setListaAnimal] = useState([])

    function inserirAnimal(e){
        e.preventDefault()

        setListaAnimal([...listaAnimal, animal])
    } 

    function cadAnimal(e) {
        setAnimal({...animal, [e.target.name]:e.target.value})
    }

    return (
        <DivEtiqueta>
            <form onSubmit={inserirAnimal}>
                <fieldset>
                    <legend>Dados do Animal</legend>
                    <label>
                        Nome do Animal:
                        <input type="text" name="nome" onChange={cadAnimal} value={animal.nome}/>
                    </label>
                    <label>
                        Raça do Animal:
                        <input type="text" name="raca" onChange={cadAnimal} value={animal.raca}/>
                    </label>
                    <label>
                        Idade do Animal:
                        <input type="text" name="idade" onChange={cadAnimal} value={animal.idade}/>
                    </label>
                    <label>
                        Sexo do Animal:
                        <input type="text" name="sexo" onChange={cadAnimal} value={animal.sexo} />
                    </label>
                    <label>
                        Nome do Dono:
                        <input type="text" name="dono" onChange={cadAnimal} value={animal.dono} />
                    </label>
                    <button type="submit">Cadastrar</button>
                </fieldset>
            </form>
            <div className="painel">
                {
                    listaAnimal.map((ani, index)=>
                        <div className="etiqueta" key={index}>
                            <p>Nome: {ani.nome}</p>
                            <p>Raça: {ani.raca}</p>
                            <p>Idade: {ani.idade}</p>
                            <p>Sexo: {ani.sexo}</p>
                            <p>Dono: {ani.dono}</p>
                        </div>
                    )
                }
            </div>
        </DivEtiqueta>
    )
}