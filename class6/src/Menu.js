import { useState } from "react";
import "./style.css";
let items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://www.lacademie.com/wp-content/uploads/2022/03/indian-breakfast-recipes.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://traditionallymodernfood.com/wp-content/uploads/2022/01/south-indian-lunch-combo-cooking-for-guest-scaled.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://www.meron.com/wp-content/uploads/2023/02/Milk-Shakes-min-scaled.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://cdn.thisday.app/media/uploads/1.jpg-9907f7ebb0c15c4a_cmprssd.webp",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/budget-sunday-lunch-collection-2b94383.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://st3.depositphotos.com/1177973/13251/i/450/depositphotos_132516060-stock-photo-delicious-milkshakes-in-glasses.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://www.awesomecuisine.com/wp-content/uploads/2014/05/curd-bonda.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://farm8.staticflickr.com/7778/17269216874_f4d1057324_z.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://northernvirginiamag.com/wp-content/uploads/2022/08/milkshake.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export const Menu = function () {
  const [state, setState] = useState("all");
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <SelectedItems state={state} setState={setState} />
      <Images state={state} />
    </div>
  );
};
const SelectedItems = function ({state, setState }) {
  const onChange = function (e) {
    setState(e.target.value);
  };
  return (
    <div className="select">
      <form onChange={onChange}>
        <input type="radio" value="all" name="items" id="A" checked={state==="all"}/>
        <label htmlFor="A">All</label>
        <input type="radio" value="breakfast" name="items" id="B" />
        <label htmlFor="B">Breakfast</label>
        <input type="radio" value="lunch" name="items" id="C" />
        <label htmlFor="C">Lunch</label>
        <input type="radio" value="shakes" name="items" id="D" />
        <label htmlFor="D">Shakes</label>
      </form>
    </div>
  );
};
const Images = function ({ state }) {
  const array =
    state !== "all" ? items.filter((a) => state === a.category) : items;
  return (
    <div className="images">
      {array.map((item) => {
        return (
          <div className="item">
            <img src={item.img} alt="Images url Error" />
            <div className="itemDetails">
              <div className="itemName">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
