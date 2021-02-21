const initialState = {
    totalItem: 0,
    products : []
};

const rootReducer = (state = initialState, action) => {
    const {type, payload} = action;

    if(type == "INCREMENT"){
        const {id} = payload;
        let products = state.products;

        let incrementedProduct = products.findIndex((prod) => prod.id == id);
        let productlist = [...products];
        productlist[incrementedProduct].amount += 1;
        return {...state,
            products: productlist 
        };
    }
}

export default rootReducer;