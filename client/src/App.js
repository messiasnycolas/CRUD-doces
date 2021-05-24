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
  const load = useState(listProducts);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      price: price
    }
    if (selected) {
      await updateProduct(id, data);
      listProducts();
    } else {
      await createProduct(data);
      clearFields();
      listProducts();
    }
  }

  async function handleDelete(id) {
    const response = await deleteProduct(id);
    console.log(response);
    clearFields();
    listProducts();
  }

  async function listProducts() {
    const response = await getProducts();
    if (response) {
      setProductList(response.data);
    }
  }
  function clearFields() {
    setId('');
    setName('');
    setPrice('');
    setSelected('');
  }

  return (
    <div className="App">
      <h1>Doceria_<span>Feliz</span></h1>
      <form className="info" onSubmit={(event) => { handleSubmit(event); }}>
        <div>
          <label>Nome:
          <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }} value={name} required>
            </input>
          </label>
        </div>
        <div>
          <label>Preço: R$
          <input
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }} value={price} required>
            </input>
          </label>
        </div>
        <div>
          <span onClick={(event) => { handleSubmit(event); }}><CheckCircle /></span>
          <span onClick={clearFields}><Cancel /></span>
        </div>
      </form>
      <div className="list">
        {productList.map((val, key) => {
          return (
            <div className="product">
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
            </div>)
        })
        }
      </div>
    </div>
  );

}

export default App;
