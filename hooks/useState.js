export  function useState(initialState) {
    let state = initialState;
  
    function setState(newState) {
      state = newState;
     
    }
  
    return [state, setState];
  }