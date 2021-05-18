import { useState, useEffect, } from 'react';
import axios from 'axios';





function Hellow() {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState('');
    const [pwd, setPwd] = useState('');
    const [componentTrigger, setComponentTrigger] = useState(false);

    const productName = (event) => {
        setProduct(event.target.value);
    }
    const pwdName = (event) => {
        setPwd(event.target.value);
    }
    useEffect(() => {
        axios.get('getallproducts/').then((res) => {
            console.log(res);
            setData(res.data.productList);
            setComponentTrigger(false);
        });
    }, [componentTrigger]);





    const addData = (e) => {
        axios.post('addnewproduct/', {
            name: product,
            price: pwd
        }).then((res) => {
            alert("Product is added successfyully");
            setComponentTrigger(true);
            setProduct('');
            setPwd('');
        });
    }
    const updateForm = (e) => {
        axios.put('updateProduct/', {
            id: e.target.id,
            name: product,
            price: pwd   
        }).then((res) => {
            console.log(res);
            setComponentTrigger(true);
            setProduct('');
            setPwd('');
        });
    }     
    const deleteData = (e) => {
        console.log(e);
        axios.delete(`deleteProduct/${e.target.id}`).then((res) => {
            alert("Your product is deleted successfully! " + e.target.id)
            setComponentTrigger(true)
        }).catch(err => {
            console.log("Error " + err);
        });
    }
    const updateMe = (e) => {


    }

    return (
        <div className="hellocomponenet">
            <div className="addData">
                <input type="text" value={product} onChange={productName} id="name" placeholder="name" /> <br />
                <input type="text" value={pwd} onChange={pwdName} id="price" placeholder="price" /> <br />
                <hr />
                <button onClick={addData} > Add product </button>

            </div>
            <div className="listofproducts">
                {data.map((item, index) => {
                    return (

                        <div className="lp">
                            <p>
                                <br /> <b>Product Name:</b> {item.name + " "} <br /> <b>Price: </b>{item.price}
                                <br />
                                <button id={item._id} onClick={deleteData} > Delete  </button>  &nbsp;
                            <button onClick={updateMe} id={item._id} > Update click here!  </button>
                                <div className="updateForm">
                                    <b>Name:</b><input type="text" value={product} onChange={productName} id="name" placeholder="name" /> <br />
                                    <b>Price:</b><input type="text" value={pwd} onChange={pwdName} id="price" placeholder="price" /> <br />
                                    <button id={item._id} onClick={updateForm} Form > Update details  </button>
                                </div>
                            </p>
                        </div>
                    );
                })}
            </div>


        </div>
    );
}

export default Hellow;
