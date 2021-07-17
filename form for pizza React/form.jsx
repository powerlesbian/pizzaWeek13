"use strict";

class ReactIntro extends React.Component {
  /**
   * Function to handle submission of the pizza form. It will grab values from the element IDs, construct a string, and then both alert that string and add it to the DOm in the most-recent-order div.
   * @param {*} event submit event, not used in this current implementation other than preventDefault()
   */
  handleSubmit(event) {
    // don't edit this function
    event.preventDefault(); // prevent the page from refreshing
    const size = document.getElementById("size").value;
    const pepperoni = document.getElementById("pepp").checked;
    const glutenFree = document.getElementById("g-free").checked;
    const additionalInstructions =
      document.getElementById("add-instr").value || "None";
    const nameForOrder =
      document.getElementById("name-for-order").value || "Anonymous";
    const quantity = document.getElementById("quantity").value || 1;

    const orderStr = `Order for ${quantity} ${size} pizza(s) that are ${
      glutenFree ? `gluten-free` : `not gluten-free`
    } and ${
      pepperoni ? `have pepperoni` : `dont have pepperoni`
    } for ${nameForOrder} \n\n Instructions: ${additionalInstructions}`;

    // don't edit this line, it shows your string in the most-recent-order div
    document.getElementById("most-recent-order").innerText = orderStr;
    // alerts order string in browser
    alert(orderStr);
  }
  render() {
    // TODO: Your task is to fill in the appropriate html fields within the form provided below to take a pizza order.
    // This is the only place you need to edit for this activity.
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>Name:<input id= "name-for-order" type="text"/></div>

          <div>Size<select id="size">
         <option>small</option>
         <option>medium</option>
         <option>large</option>
         <option>Senior</option>
</select>
</div>

          <div>Pepperoni <input id="pepp" type="checkbox"/> </div>

          <div>Gluten Free <input id="g-free" type="checkbox"/></div>

          <div>Quantity <input type="number" id="quantity"/></div>

          <div>Additional Instructions <textarea id="add-instr" cols="50" rows="3"/></div>

          <input id="form-submit" type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(ReactIntro),
  document.getElementById("root")
);
