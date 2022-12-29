

const init ={
    name : "" ,
    loc : " ",
}

// state = oldData ,action = newData

const appReducer = (state = init, action) => {
    switch(action.type){
        case "NAME-CHANGE" : 
          return {
           ...state,
           name: action.payload,
          };
        case "LOC-CHANGE" :
            return {
              ...state,
              loc: action.payload,
            };   
         

    }
   
    return state;

};

export default appReducer;