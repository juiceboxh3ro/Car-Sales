import { REMOVE_FEATURE, BUY_ITEM } from '../actions'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const myReducer = (state = initialState, action) => {
  switch(action.type) {
    case REMOVE_FEATURE:
      const removeItem = state.car.features.find(i => i.id === action.payload.item)
      
      return({
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features.filter(i => {return i !== removeItem})]
        },
        additionalFeatures: [...state.additionalFeatures, removeItem],
        additionalPrice: state.additionalPrice - removeItem.price
      })
      // find id
      // remove price from additional price
      // remove feature from added features array
      // add feature to additional features  array

    case BUY_ITEM:
      const newItem = state.additionalFeatures.find(i => i.id === action.payload.item)

      return ({
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, newItem]
        },
        additionalFeatures: [...state.additionalFeatures.filter(i => {return i !== newItem})],
        additionalPrice: state.additionalPrice + newItem.price
      })
      
      // find id
      // add price payload to additional price
      // add feature to added features array
      // remove feature from additional features array
    default:
      return state;
  }
}