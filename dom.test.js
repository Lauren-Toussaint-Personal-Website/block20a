/**
 * @jest-environment jsdom
 */

const { getByRole, queryByRole, getAllByRole,fireEvent, queryByText } = require("@testing-library/dom");
const { calculateCost, getTotalCost } = require("../index.js");

/**
 * Resets the DOM to a clean state before each test.
 * NOTE: In the future, there will be ways to directly
 * import the HTML file, but this works for now :)
 */
function resetDOM() {
  document.body.innerHTML = `
  <main>
    <h1>The Prescription</h1>
    <section>
      <h2>Prescription Details</h2>
      <label>
        Price per refill
        <input type="number" name="price" id="price" />
      </label>
      <label>
        Number of refills
        <input type="number" name="refills" id="refills" />
      </label>
      <label>
        Subscribed?
        <input type="checkbox" name="subscribed" id="subscribed" />
      </label>
      <label>
        Coupon?
        <input type="checkbox" name="coupon" id="coupon" />
      </label>
      <button id="calculate">Calculate Cost</button>
    </section>
    <label>
      Total Cost
      <output id="cost">$0.00</output>
    </label>
  </main>
  `;
  document.querySelector("#calculate").addEventListener("click", calculateCost);
}

describe("The document", () => {
  beforeEach(resetDOM);
  
  test("contains fields for a user to input price, refills, subscription status, and coupon status", () => {
    const price = queryByRole(document, "spinbutton", { label: "Price per refill" });
    expect(price).not.toBe(!(Number));

    const refills = queryByRole(document, "spinbutton", { label: "Number of refills" });
    expect(refills).not.toBe(!(Number));

    const subscribed = queryByRole(document, "checkbox", { label: "Subscribed?", id: "subscribed"});
    expect(subscribed).not.toBe(invalid);

    const coupon = queryByRole(document, "checkbox", { label: "Coupon?", id: "coupon"});
    expect(coupon).not.toBe(invalid);

    const calculate = queryByRole(document, "button", { name: "Calculate Cost", id: "calculate"});
    expect(calculate).not.toBe(false);
  });

  test("displays $0.00 initially", () => {
    const cost = queryByText(document, "button", {name: "Total Cost", id: "cost"});
    expect(cost).toBe('$0.00');
  });

  // TODO: Complete this test case so it is testing the described behavior.
  test("displays the correct cost for the user's input values after clicking the calculate button", () => {
    
    const price = getAllByRole(document, "spinbutton", { id: "price", value:  { now: 25, min: 0, max: 1000 }});
    expect(price).not.toBe(!(Number));

    const refills = getAllByRole(document, "spinbutton", { id: "refills", value:  { now: 1, min: 0, max: 1000 }});
    expect(refills).not.toBe(!(Number));

    const subscribed = getAllByRole(document, "checkbox", { id: "subscribed" });
    expect(subscribed).not.toBe(invalid);
    
    const coupon = getAllByRole(document, "checkbox", { id: "coupon"});
    expect(coupon).not.toBe(invalid);
    
    const calculate = getAllByRole(document, "button", { id: "calculate"});
    expect(calculate).not.toBe(false);
    
    const cost= getAllByRole(document, "status", { name: "Total Cost", id: "cost" });
    expect(cost).toBe(text)
    
  });

  test("displays $0.00 initially", () => {
    const cost = queryByText(document, "$0.00");
    expect(cost).not.toBe(null);
  });

  // TODO: Complete this test case so it is testing the described behavior.
  test("displays the correct cost for the user's input values after clicking the calculate button", () => {
    const price = getByRole(document, "spinbutton", { name: /price/i });
    const refills = getByRole(document, "spinbutton", { name: /refills/i}); 
    fireEvent.change(price, {target: {value: 25 }})
    fireEvent.change(refills, {target: {value: 2 }})
    const subscribed = getByRole(document, "checkbox", {
      name: /subscribed/i,
    }); // NO fireEvent.nochange(coupon, {target: {value: 'unchecked'}})
    const coupon = getByRole(document, "checkbox", { name: /coupon/i});
    // NO fireEvent.nochange(coupon, {target: {value: 'unchecked'}})
    const calculateButton = getByRole(document, "button", {
      name: /calculate/i,
    });

    fireEvent.click(calculateButton);
    const costElement = getByRole(document, "status", { label: "Total Cost", id: "cost" }); // <output id='cost'>$4.00</output>
    const totalCost = costElement.innerHTML // $50.00
    // TODO: Change this assertion to check the correct value.
    expect(totalCost).toBe('$50.00');
  }
)})
// npm test Unit2.Prescription.StarterCode/__tests__/dom.test.js --watch