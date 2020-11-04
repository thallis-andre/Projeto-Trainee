import './styles.css';
const React = require('react')

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className="box">
        <input type="file" onChange={this.handleChange} className="input-upload" />
        {/* <a class="inputWrapper">
          Editar imagem de perfil
          <input class="fileInput" type="file" name="file1" onChange={this.handleChange}/>
        </a> */}
        <div >
          <img src={this.state.file} className="tamanho-imagem" />
        </div>
      </div>
    );
  }
}
export default Upload