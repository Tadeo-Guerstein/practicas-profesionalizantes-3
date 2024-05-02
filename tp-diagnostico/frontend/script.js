const URL = 'http://localhost:8080/'

const selectProvincias = document.getElementById('provincias-select')
const selectDepartamentos = document.getElementById('departamentos-select')
const selectMunicipios = document.getElementById('municipios-select')
const selectLocalidades = document.getElementById('localidades-select')
const pElement = document.getElementById('data-localidades')

const deleteLocalChildren = () => {
  const localidadesChildren = [...selectLocalidades.children]
  if (localidadesChildren.length > 1) {
    localidadesChildren.forEach((i) => {
      if (i.value !== 'Localidades') {
        selectLocalidades.removeChild(i)
      }
    })
    selectLocalidades.setAttribute('disabled', true)
  }
}

const deleteMuniChildren = () => {
  const municipiosChildren = [...selectMunicipios.children]
  if (municipiosChildren.length > 1) {
    municipiosChildren.forEach((i) => {
      if (i.value !== 'Municipios') {
        selectMunicipios.removeChild(i)
      }
    })
    selectMunicipios.setAttribute('disabled', true)
  }
}

const deleteDeptChildren = () => {
  const departamentosChildren = [...selectDepartamentos.children]
  if (departamentosChildren.length > 1) {
    departamentosChildren.forEach((i) => {
      if (i.value !== 'Departamentos') {
        selectDepartamentos.removeChild(i)
      }
    })
  }
}

const handleChangeLocalidad = () => {
  pElement.innerText = selectLocalidades.value
}

const handleChangeMunicipio = (ev) => {
  ev.preventDefault()
  const idMunicipio = selectMunicipios.value
  fetch(`${URL}localidades/${idMunicipio}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const { data } = { ...response }

      if (data.length > 0) {
        selectLocalidades.removeAttribute('disabled')
        deleteLocalChildren()
        data.forEach((i) => {
          const localidadesOptions = document.createElement('option')
          localidadesOptions.value = JSON.stringify(i)
          localidadesOptions.innerText = i.nombre
          selectLocalidades.appendChild(localidadesOptions)
        })
        selectLocalidades.addEventListener('change', handleChangeLocalidad)
      }
    })
}

const handleChangeDepartamento = (ev) => {
  ev.preventDefault()
  const idDepartamento = selectDepartamentos.value
  fetch(`${URL}municipios/${idDepartamento}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const { data } = { ...response }

      if (data.length > 0) {
        selectMunicipios.removeAttribute('disabled')
        deleteLocalChildren()
        deleteMuniChildren()
        data.forEach((i) => {
          const municipiosOptions = document.createElement('option')
          municipiosOptions.value = i.id
          municipiosOptions.innerText = i.nombre
          selectMunicipios.appendChild(municipiosOptions)
        })
        selectMunicipios.addEventListener('change', handleChangeMunicipio)
      }
    })
}

const handleChangeProvincia = (ev) => {
  ev.preventDefault()
  const idProvincia = selectProvincias.value
  fetch(`${URL}departamentos/${idProvincia}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const { data } = { ...response }

      if (data.length > 0) {
        selectDepartamentos.removeAttribute('disabled')
        deleteLocalChildren()
        deleteMuniChildren()
        deleteDeptChildren()
        data.forEach((i) => {
          const departamentosOptions = document.createElement('option')
          departamentosOptions.value = i.id
          departamentosOptions.innerText = i.nombre
          selectDepartamentos.appendChild(departamentosOptions)
        })
        selectDepartamentos.addEventListener('change', handleChangeDepartamento)
      }
    })
}

const handleOnLoad = () => {
  fetch(URL).then((response) => {
    if (response.status === 409) {
      alert(JSON.stringify(response))
      return
    }
    fetch(`${URL}provincias`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const { data } = { ...response }
        console.info(data)
        if (data.length > 0) {
          selectProvincias.removeAttribute('disabled')
          data.forEach((i) => {
            const provinciasOptions = document.createElement('option')
            provinciasOptions.value = i.id
            provinciasOptions.innerText = i.nombre
            selectProvincias.appendChild(provinciasOptions)
          })
          selectProvincias.addEventListener('change', handleChangeProvincia)
        }
      })
  })
}
