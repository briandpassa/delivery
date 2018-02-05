import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const  itemsList = [
  {
    uuid: "1001",
    categoryName: "Chicken & Beef",
    items: [
      {
        uuid: "0001",
        name: "Ayam Penyet",
        price: 6.9,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064,x_186/v1470928637/app_ayampenyet.jpg",
        desc: "Signature smashed fried chicken. Crispy on the outside, tender on the inside! Served with tofu, tempeh, crispy bits, and signature chilli paste.",
        orderQty: 0,
        choice: ["2001", "2002"]
      },
      {
        uuid: "0002",
        name: "Ayam Bakar",
        price: 6.9,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064,x_259/v1470928633/app_grilledchicken.jpg",
        desc: "Grilled to Perfection! Signature grilled tender chicken with a hint of sweetness served with grilled tofu, tempeh and cut chili in black sauce.",
        orderQty: 0,
        choice: ["2001"]
      },
      {
        uuid: "0004",
        name: "Beef Rendang",
        price: 7.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_2736,w_2736/v1470928638/app_beefrendang.jpg",
        desc: "Voted the number one dish of ‘World’s 50 Most Delicious Foods (Readers’ Pick)’ list in 2011, beef rendang is cooked for hours with rich spices for perfect taste and tenderness.",
        orderQty: 0,
        choice: ["2001", "2002"]
      },
      {
        uuid: "0005",
        name: "Empal Bakar",
        price: 8.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064,x_200/v1470928632/app_grillbeef.jpg",
        desc: "The fried beef is rich in spices, long marinated with coriander, tamarind, palm sugar, among others. Served with fried tofu, beancake, crispy bits, and our signature chili paste.",
        orderQty: 0,
        choice: ["2001"]
      },
      {
        uuid: "0006",
        name: "Dancing Fried Fish",
        price: 11.9,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_2442,w_2442,x_1/v1470928639/app_dancingfriedfish.jpg",
        desc: "Fried Tilapia fish served with our signature chili paste.",
        orderQty: 0,
        choice: ["2001"]
      },
      {
        uuid: "0007",
        name: "Chicken Satay",
        price: 6.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064/v1470928636/app_chickensatay.jpg",
        desc: "Six sticks of savory grilled and tender chicken satay served with rice cake and peanut sauce. Ask for the President Chicken Satay now!",
        orderQty: 0,
        choice: ["2001"]
      },
      {
        uuid: "0008",
        name: "Karedok",
        price: 5.9,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064/v1470928636/app_karedok.jpg",
        desc: "Fresh cabbage, long bean, cucumber, beansprout served with freshly ground richly spiced peanut sauce and crackers.",
        orderQty: 0,
        choice: ["2002"]
      },
      {
        uuid: "0009",
        name: "Rujak Mangga",
        price: 5.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_2832,w_2832/v1470928639/app_rujakmango.jpg",
        desc: "Cut crunchy mango served with special chili paste. Try it now for a complete experience!",
        orderQty: 0,
        choice: []
      },
    ]
  },
  {
    uuid: "1002",
    categoryName: "Rice",
    items: [

      {
        uuid: "0010",
        name: "Fried Rice",
        price: 6.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064/v1470928632/app_friedrice.jpg",
        desc: "Our signature chicken fried rice, served with fried egg, prawn crackers, tomato, and cucumber. Spicy? Less Spicy? Non Spicy? You Decide!",
        orderQty: 0,
        choice: ["2002"]
      },
      {
        uuid: "0011",
        name: "Yellow Rice",
        price: 2.2,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064/v1470928637/app_yellowrice.jpg",
        desc: "Fragrant rice cooked with turmeric served with shredded eggs, sliced beancake dish, and cucumber. Good to combine with our Chicken & Beef dishes. Another all-time favourite!!",
        orderQty: 0,
        choice: []
      },
    ]
  },
  {
    uuid: "1003",
    categoryName: "Desserts",
    items: [

      {
        uuid: "0012",
        name: "Es Campur",
        price: 4.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1600,w_1600,x_0,y_591/v1470928633/app_escampur.jpg",
        desc: "Iced mixed fruit dessert a la President",
        orderQty: 0,
        choice: ["2004"]
      },

      {
        uuid: "0013",
        name: "Es Teler",
        price: 4.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_2832,w_2832,x_636/v1470928634/app_esteler.jpg",
        desc: "Iced coconut, jackfruit, avocado in coconut milk",
        orderQty: 0,
        choice: []
      },

      {
        uuid: "0014",
        name: "Chendol",
        price: 3.5,
        image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_2832,w_2832/v1470928636/app_cendol.jpg",
        desc:"",
        orderQty: 0,
        choice: []
      },
    ]
  },
]

const  itemChoices = [
  {
    uuid: "2001",
    choiceName: "CHOICE OF RICE",
    isRequired: true,
    type: "radio",
    choicesList: [
      {
        name: "No Rice",
        price: 0,
        selected: false,
      },
      {
        name: "Steamed Rice",
        price: 0.9,
        selected: false,
      },
      {
        name: "Yellow Fragrant Rice",
        price: 2.2,
        selected: false,
      },
    ]
  },
  {
    uuid: "2002",
    choiceName: "CHOICE OF SPICINESS",
    isRequired: true,
    type: "radio",
    choicesList: [
      {
        name: "Non-spicy",
        price: 0,
        selected: false,
      },
      {
        name: "Less-spicy",
        price: 0,
        selected: false,
      },
      {
        name: "Spicy",
        price: 0,
        selected: false,
      },
    ]
  },
  {
    uuid: "2003",
    choiceName: "CHOICE OF ICE LEVEL",
    isRequired: false,
    type: "radio",
    choicesList: [
      {
        name: "Less-Ice",
        price: 0.5,
        selected: false,
      },
      {
        name: "No-Ice",
        price: 1,
        selected: false,
      },
    ]
  },
  {
    uuid: "2004",
    choiceName: "SELECTION OF TOPPINGS",
    isRequired: false,
    type: "select",
    choicesList: [
      {
        name: "Coconut",
        price: 2.5,
        selected: false,
      },
      {
        name: "Avocado",
        price: 3.5,
        selected: false,
      },
      {
        name: "Orange",
        price: 1,
        selected: false,
      },
      {
        name: "Jelly",
        price: 1,
        selected: false,
      },
    ]
  },
]

/*
let uuidoIndexMapOfItemLists = [];
for (let i = 0; i < itemsList.length; i++) {
  for (let j = 0; j < itemsList[i].items.length; j++) {
    uuidoIndexMapOfItemLists.push({uuid: itemsList[i].items[j].uuid, index:[i,j]});
  }
}
*/

const  orderedList = [/*
  {
    orderuuid: "21323412",
    uuid: "0001",
    name: "Ayam Penyet",
    price: 6.9,
    image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064,x_186/v1470928637/app_ayampenyet.jpg",
    desc: "Signature smashed fried chicken. Crispy on the outside, tender on the inside! Served with tofu, tempeh, crispy bits, and signature chilli paste.",
    newOrderQty: 1,
    orderQty: 2,

    choice: [
      {
        uuid: "2003",
        choiceName: "ICE LEVEL",
        isRequired: false,
        choicesList: [
          {
            name: "Less-Ice",
            price: 0.5,
            selected: true,
          },
          {
            name: "No-Ice",
            price: 1,
            selected: false,
          },
        ]
      },
      {
        uuid: "2001",
        choiceName: "CHOICE OF RICE",
        isRequired: true,
        choicesList: [
          {
            name: "Yellow Fragrant Rice",
            price: 2.2,
            selected: false,
          },
          {
            name: "Steamed Rice",
            price: 0.9,
            selected: true,
          },
        ]
      },
      {
        uuid: "2002",
        isRequired: true,
        choiceName: "CHOICE OF SPICINESS",
        choicesList: [
          {
            name: "Less-spicy",
            price: 0.2,
            selected: true,
          },
        ]
      },
    ]
  },
  {
    orderuuid: "21323413",
    uuid: "0006",
    name: "Dancing Fried Fish",
    price: 11.9,
    image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_2442,w_2442,x_1/v1470928639/app_dancingfriedfish.jpg",
    desc: "Fried Tilapia fish served with our signature chili paste.",
    orderQty: 4,

    choice: [
      {
        uuid: "2001",
        choiceName: "CHOICE OF RICE",
        isRequired: true,
        choicesList: [
          {
            name: "Yellow Fragrant Rice",
            price: 2.2,
            selected: true,
          },
          {
            name: "Steamed Rice",
            price: 0.9,
            selected: false,
          },
        ]
      }
    ]
  },*/
];


const recomendedItem = [
  [2,0],[2,1],[0,5] //[categoryIndex, itemIndex]
];

const  deliveryTime = "Wed, 24 Jan, 7:15 - 7:45PM";
const  deliveryAddress = {
  address : {
    roadNumber: 92,
    roadName: "Devonshire Road",
    unitNumber: 17,
    level: 3,
    country: "Singapore",
    postalCode: 2389874,
  },

  latLang : {
    lat: 1.2968232,//1.2990053,
    lng: 103.8395817,//103.8351468,
  },
}


const  activeItem = {/*
  uuid: "0001",
  name: "Ayam Penyet",
  price: 6.9,
  image: "http://res.cloudinary.com/dem3ref6o/image/upload/c_crop,h_1064,w_1064,x_186/v1470928637/app_ayampenyet.jpg",
  desc: "Signature smashed fried chicken. Crispy on the outside, tender on the inside! Served with tofu, tempeh, crispy bits, and signature chilli paste.",
  newOrderQty: 1,
  orderQty: 0,
  choice: [
    {
      uuid: "2003",
      choiceName: "ICE LEVEL",
      isRequired: false,
      choicesList: [
        {
          name: "Less-Ice",
          price: 0.5,
          selected: true,
        },
        {
          name: "No-Ice",
          price: 1,
          selected: false,
        },
      ]
    },
    {
      uuid: "2001",
      choiceName: "CHOICE OF RICE",
      isRequired: true,
      choicesList: [
        {
          name: "Yellow Fragrant Rice",
          price: 2.2,
          selected: false,
        },
        {
          name: "Steamed Rice",
          price: 0.9,
          selected: true,
        },
      ]
    },
    {
      uuid: "2002",
      choiceName: "CHOICE OF SPICINESS",
      isRequired: true,
      choicesList: [
        {
          name: "Less-spicy",
          price: 0.2,
          selected: true,
        },
      ]
    },
  ]*/
}

const initialState = {
  itemsList,
  orderedList,
  recomendedItem,
  deliveryTime,
  deliveryAddress,
  itemChoices,
  activeItem,
//  uuidoIndexMapOfItemLists,
}

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

/*
store.subscribe(() =>
  console.log(store.getState().orderedList)
)
*/

export default store
