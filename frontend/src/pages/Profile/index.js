import React, { useState, useEffect } from 'react';

import './styles.css';
import Header from '../Header'
import Upload from '../DisplayImage';
import jwt_decode from 'jwt-decode';

import defaultUser from '../../assets/default-user-image.png';
import api from '../../services/api';
import { useUser } from '../../context/user';



function Profile() {

  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const { user, setUser } = useUser()


  function handleChange(event) {
    setFile(URL.createObjectURL(event.target.files[0]))
    setFileUpload(event.target.files[0])
  }

  async function uploadImage() {
    const formData = new FormData()
    formData.append('file', fileUpload)
    formData.append('email', user.email)

    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };

    const response = await api.put('/uploadImage', formData, config);
    console.log(response)
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
              <label for="upload" className="label-input">
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
            <button onClick={() => uploadImage()}>Salvar alterações</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
