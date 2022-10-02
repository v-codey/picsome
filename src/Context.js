import React, { useState, useEffect, useReducer, createContext } from "react"

const Context = createContext()

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD": {
          return { ...state, cartItems: [...state.cartItems, action.img] }
        }
        case "REMOVE": {
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.id),
          }
        }
        case "EMPTY": {
          return { ...state, cartItems: [] }
        }
        default: {
          return state
        }
      }
    },
    {
      cartItems: [],
    }
  )
  let { cartItems } = state

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data))
      .catch()
  }, [])

  function addCart(img) {
    // setCartItems(prev => [...prev, img])
    dispatch({ type: "ADD", img })
  }

  function removeCart(id) {
    // setCartItems(prevItem => prevItem.filter(item => item.id !== id))
    dispatch({ type: "REMOVE", id })
  }

  function emptyCart() {
    // setCartItems([])
    dispatch({ type: "EMPTY" })
  }

  function toggleFavorite(id) {
    const updateArray = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })
    setAllPhotos(updateArray)
  }

  // console.log(allPhotos)

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavorite,
        addCart,
        removeCart,
        emptyCart,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
