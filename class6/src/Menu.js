import { useState } from "react";
import "./style.css";
const data = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4D9Qd-wodtv9ztG1fZXM1dko4pl5Pw4-3g&usqp=CAU`,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpht1BUToiWLK_VuVJEmhOI_gxIjgLvnnog&usqp=CAU`,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://b.zmtcdn.com/data/dish_photos/8a0/08ad40238a7ead9b59116c02d9c258a0.jpg?output-format=webp ",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2QLyeapPZNfj1acm9SltWO8fveCzB2EjrQ&usqp=CAU`,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVgZG_24Sv9TLm2H4C6yyFiBPMKy7yN0KaA&usqp=CAU",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://b.zmtcdn.com/data/dish_photos/7f5/98e936d734fc5b3261fb47c8a1e157f5.jpg?output-format=webp",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://www.collinsdictionary.com/images/full/breakfast_169364927.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU2W3ACgPoQLHbQ02hqBEnfndQlpR3d7RVw&usqp=CAU",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://b.zmtcdn.com/data/pictures/chains/0/18252180/1ebfccb52d6a0fc52ff0a8348bbf2d9a_o2_featured_v2.jpg?output-format=webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const Nav = function ({state,setState}) {
    const onchange = function(e){
        setState(e.target.id)
    }
  return (
    <form onChange={onchange}>
      <input type="radio" name="items" id="all" checked={state==="all"?true:false}/>
      <label for="all" >All</label>
      <input type="radio" name="items" id="breakfast" />
      <label for="breakfast">Breakfast</label>
      <input type="radio" name="items" id="lunch" />
      <label for="lunch">Lunch</label>
      <input type="radio" name="items" id="shakes" />
      <label for="shakes">Shakes</label>
    </form>
  );
};
const Items1 = function ({ state }) {
  let arr;
  if (state === "all") {
    arr = data.filter((item) => item);
  } else {
    arr = data.filter((item) => state === item.category);
  }
  return (
    <div className="items">
      {arr.map((item) => {
        return (
          <div className="item">
            <img src={item.img} alt="Error" />
            <div>
              <div className="itemName">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export const Menu = function () {
  const [state, setState] = useState("all");
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <Nav state={state} setState={setState}/>
      <Items1 state={state} />
    </div>
  );
};
