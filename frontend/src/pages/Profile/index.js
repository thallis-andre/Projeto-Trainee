import React, { useState, useEffect } from 'react';

import './styles.css';
import Header from '../Header'
import Loader from '../Loader'

import defaultUser from '../../assets/default-user-image.png';
import api from '../../services/api';
import { useUser } from '../../context/user';
import { useLoader } from '../../context/loader';




function Profile() {

  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const { user, setUser } = useUser()
  const { loader, setLoader } = useLoader()



  function handleChange(event) {
    setFile(URL.createObjectURL(event.target.files[0]))
    setFileUpload(event.target.files[0])
  }

  async function uploadImage(e) {
    try {
      e.preventDefault()
      const formData = new FormData()
      formData.append('file', fileUpload)
      formData.append('email', user.email)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };

      setLoader(true)
      await api.put('/uploadImage', formData, config);
      const response = await api.put('/uploadImage', formData, config);
      setUser(response.data)
      alert('Imagem alterada com sucesso');
      setLoader(false)
    } catch (error) {
      alert('Não foi possível alterar a imagem. Por favor, tente novamente.');
      setLoader(false)
    }

  }


  function returnImage() {
    if (!!user.image && file == null) {
      return user.image
    }

    if (!user.image && !!file) {
      return file
    }

    if (!!user.image && !!file) {
      return file
    }

    return defaultUser

  }

  return (
    <>
      <Header />
      <div className="container-profile">
        <div className="form-profile">
          <form>
            <div className="input-image">
              <img src={returnImage()} className="tamanho-imagem" />
            </div>
            <label className="label-input">
              <span>Editar foto</span>
              <input type="file" id="upload" onChange={handleChange} className="input-upload" hidden={true} />
            </label>
            <input type="text"
              className="nome"
              value={user.name}
              disabled={true} />
            <input type="text"
              className="email"
              value={user.email}
              disabled={true} />
            <button onClick={(e) => uploadImage(e)}>Salvar alterações</button>
          </form>
        </div>
      </div>
      <Loader />
    </>
  );
}

export default Profile;
