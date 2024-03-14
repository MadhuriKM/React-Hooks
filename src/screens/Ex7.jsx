import React, { useCallback, useEffect, useState }from 'react'
const url = "https://dummyjson.com"

 function Ex7() {
    const [product,setProduct] = useState([])
    const getProducts = useCallback(() => {

        const readProducts = async () => {
            await fetch(`${url}/products`, {
                method: "GET"
            }).then(res =>res.json())
            .then(res => {
                console.log(`products =`, res)
                setProduct(res.products)
            }).catch(err => console.log(err.message))
        }

        readProducts()
    },[])

    useEffect(() => {
        getProducts()  // invoking callback
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">useCallback Hook</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>
                        useCallback will return a memorized version of the callback that only changes if one of the inputs has changed.
                    </p>
                </div>
            </div>

            <div className="row">
                {
                    product?.map((item,index) => {
                        const {id,title,description, thumbnail, price, discountPercentage, rating, stock, brand} = item
                        return(
                            <div className="col-md-4 col-sm-6 col-lg-4" key={index}>
                                <div className="card mt-2">
                                    <img src={thumbnail} className="card-img-top" height={200} />
                                    <div className="card-body">
                                        <h6 className="text-center text-success">
                                            { title }
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
 }

 export default Ex7