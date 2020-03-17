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
      console.log('reducer: item remove', action.payload.item)

      const removeItem = state.additionalFeatures.find(i => i.id === action.payload.item)
      return({
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features],
          features: state.car.features.pop(removeItem)
        },
        additionalPrice: state.additionalPrice - removeItem.price
      })
      // find id
      // remove price
      // remove feature from array

    case BUY_ITEM:
      console.log('reducer: item buy', action.payload.item)
      const newItem = state.additionalFeatures.find(i => i.id === action.payload.item)

      return ({
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, newItem]
        },
        additionalPrice: state.additionalPrice + newItem.price
      })
      
      // find id
      // add price payload to additional price
      // add feature to features array
    default:
      return state;
  }
}