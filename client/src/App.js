import './App.css';
import { useState } from 'react';
import { createProduct, updateProduct, deleteProduct, getProducts } from './http';
import { Delete, Edit, Cancel, CheckCircle } from '@material-ui/icons';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [productList, setProductList] = useState([]);
  const [selected, setSelected] = useState('');
  const [id, setId] = useState('');
  // eslint-disable-next-line
  const load = useState(getProductList);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');

  function codeList(val) {
    return (
      <div key={val.id} className="product">
        <div className="product-info">
          {val.name}
        </div>
        <div>R${parseFloat(val.price).toFixed(2)}
        </div>
        <span onClick={() => {
          setName(val.name);
          setPrice(val.price);
          setId(val.id);
          setSelected(val);
        }}>
          <Edit className="edit-button" />
        </span>

        <span onClick={() => {
          setSelected(val);
          handleDelete(val.id);
        }}>
          <Delete className="delete-button" />
        </span>
      </div>);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      price: price
    }
    if (selected) {
      await updateProduct(id, data);
      getProductList();
      setMessage(" Produto atualizado com sucesso!");
    } else {
      await createProduct(data);
      clearFields();
      getProductList();
      setMessage(" Produto registrado com sucesso!");
    }
  }

  async function handleDelete(id) {
    await deleteProduct(id);
    clearFields();
    getProductList();
    setMessage(" Produto excluído com sucesso!");
  }

  async function getProductList() {
    const response = await getProducts();
    if (response) {
      setProductList(response.data);
    } else {
      setMessage(" Não há produtos para serem exibidos, que tal registrar um primeiro?");
    }
  }

  function clearFields() {
    setId('');
    setName('');
    setPrice('');
    setSelected('');
  }
  function clearMessage() {
    setMessage('');
  }
  function Message() {
    if (message) return (<div className="message" onClick={clearMessage} ><Cancel /> {message}</div>);
    else return null;
  }
  function List() {
    return renderList();
    function renderList() {
      if (productList.length > 0) {
        if (search) {
          return productList.map((val, key) => {
            let term = search.toUpperCase();
            let nameSearch = val.name.toUpperCase();

            for (let letter in term) {
              if (term[letter] !== nameSearch[letter]) {
                return null;
              }
            }
            return (codeList(val));
          });
        } else {
          return productList.map((val, key) => {
            return (codeList(val));
          })
        }
      } else return null;
    }
  }

  return (
    <div className="App">
      <h1>Doceria_<span>Feliz</span></h1>
      <Message />
      <form className="info" onSubmit={(event) => { handleSubmit(event); }}>
        <div>
          <label>Nome:
          <input
              type="text"
              maxLength="20"
              onInput={(event) => {
                setName(event.target.value);
              }} value={name} required>
            </input>
          </label>
        </div>
        <div>
          <label>Preço: R$
          <input
              className="campo-preco"
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }} value={price} required>
            </input>
          </label>
        </div>
        <div>
          <span onClick={(event) => {
            if ((price !== '') && (name !== '')) {
              handleSubmit(event);
            } else setMessage("Preencha os campos!");
          }}><CheckCircle />
          </span>
          <span onClick={clearFields}><Cancel /></span>
        </div>
        <div>
          <input
            className="campo-busca"
            type="text"
            placeholder="Filtrar..."
            onChange={(event) => {
              setSearch(event.target.value);
              List();
            }}>
          </input>
        </div>
      </form>
      <div className="list">
        <List />
      </div>
    </div>
  );

}

export default App;
