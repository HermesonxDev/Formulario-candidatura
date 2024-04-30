import { useState } from "react"
import axios from "axios"
export default function App() {

  const [candidatureState, setCandidatureState] = useState({
    name: '',
    email: '',
    telephone: '',
    office: '',
    education: '',
    observation: '',
    resume_file: '',
  })

  const handleCandidatureForm = (event, key) => {
    const { name } = event.target

    setCandidatureState({
      ...candidatureState, [key]: event.target.value,
      resume_file: name === 'resume_file' && event.target.files[0]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try{
      axios.post('http://127.0.0.1:8000/api/candidatures/', candidatureState).then(response => alert(response.data))
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex">
      <div className="bg-charcoal mx-auto py-5 mt-5 w-2/5 flex text-white rounded-md">
        <div className="mx-auto flex flex-col gap-5">
          <h1 className="mx-auto text-7xl">Paytour</h1>
          <h2 className="text-2xl">Candidatura a Desenvolvedor Fullstack</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="input-div">
              <label className="text-xl">Name:</label>
              <input
                type="text"
                value={candidatureState.name}
                onChange={(event) => handleCandidatureForm(event, 'name')}
                placeholder="Digite seu nome"
                className="text-black rounded-sm padding-placeholder"
                required/>
            </div>

            <div className="input-div">
              <label className="text-xl">Email:</label>
              <input
                type="email"
                value={candidatureState.email}
                onChange={(event) => handleCandidatureForm(event, 'email')}
                placeholder="Digite seu email"
                className="text-black rounded-sm padding-placeholder"
                required/>
            </div>

            <div className="input-div">
              <label className="text-xl">Telefone:</label>
              <input
                type="text"
                value={candidatureState.telephone}
                onChange={(event) => handleCandidatureForm(event, 'telephone')}
                placeholder="Digite seu numero de telefone"
                className="text-black rounded-sm padding-placeholder"
                required/>
            </div>

            <div className="input-div">
              <label className="text-xl">Cargo Desejado:</label>
              <input
                type="text"
                value={candidatureState.office}
                onChange={(event) => handleCandidatureForm(event, 'office')}
                placeholder="Digite o cargo desejado"
                className="text-black rounded-sm padding-placeholder"
                required/>
            </div>

            <div className="input-div">
              <label className="text-xl">Escolaridade:</label>
              <select
                className="text-black rounded-sm"
                value={candidatureState.education}
                onChange={(event) => handleCandidatureForm(event, 'education')}
              >
                <option value="">Selecione sua escolaridade</option>
                <option value="Ensino Médio incompleto">Ensino Médio incompleto</option>
                <option value="Ensino Médio completo">Ensino Médio completo</option>
                <option value="Ensino Técnico">Ensino Técnico</option>
                <option value="Graduação">Graduação</option>
                <option value="Bacharelado">Bacharelado</option>
                <option value="Doutorado">Doutorado</option>
                <option value="Especialização">Especialização</option>
              </select>
            </div>

            <div className="input-div">
              <label className="text-xl">Observações:</label>
              <textarea
                placeholder="Digite suas observações"
                value={candidatureState.observation}
                onChange={(event) => handleCandidatureForm(event, 'observation')}
                className="text-black rounded-sm resize-none h-32 padding-placeholder"
                required>
              </textarea>
            </div>

            <div className="input-div">
              <label className="text-xl">Curriculo:</label>
              <input
                type="file"
                name="resume_file"
                onChange={(event) => handleCandidatureForm(event, 'resume_file')}
                className="rounded-sm"
                required/>
            </div>

            <button
              type="submit"
              className="btn"
            >Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}