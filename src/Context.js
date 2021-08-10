import { useState, createContext } from "react";

const DataContext = createContext({
    saveUserInfo: () => {},
    users: [],
    updateCtxBalance: () => {},
    currentUser: {},
    updateCurrUser: () => {}
  });
  
  export const DataContextProvider = ({ children }) => {
    const [userList, setUserList] = useState([{      
      "name": 'Peter',
      "email": 'Parker@mit.edu',
      "password": 'password',
      "balance": 10
    }]);
    const [currUser, setCurrUser] = useState("");
    
    const saveUserHandler = (Name, email, password, balance) => {
      let newUser = {
        "name": Name,
        "email": email,
        "password": password,
        "balance": balance
      };
  
      setUserList(prevState => [...prevState, newUser]);
      setCurrUser(newUser);
    }
  
    const updateCtxBalance = (num, calc) => {
      let newBal = 0;
  
      if (calc === "ADD") {
        setUserList(prevState => {
          for (let i = 0; i < prevState.length; i++) {
            if (prevState[i].email === currUser.email) {
              newBal = parseInt(prevState[i].balance) + parseInt(num);
              prevState[i].balance = newBal
            }
          }
          return prevState;
        })
      } else if(calc === "MINUS") {
        setUserList(prevState => {
          for (let i = 0; i < prevState.length; i++) {
            if (prevState[i].email === currUser.email) {
              newBal = parseInt(prevState[i].balance) - parseInt(num)
              prevState[i].balance = newBal
            }
          }
          return prevState;
        })
      }
      
      setCurrUser(prevState => {
        return {...prevState, "balance":newBal}
      })
    }
  
    let myValue = {
      saveUserInfo: saveUserHandler,
      users: userList,
      updateCtxBalance: updateCtxBalance,
    }
  
    return (
      <DataContext.Provider
        value={myValue}
      >
        {children}
      </DataContext.Provider>
    )
  }

  export default DataContext;
//------------------------------------------------------------------









