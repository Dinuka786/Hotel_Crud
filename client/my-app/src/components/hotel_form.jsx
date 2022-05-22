import React, { Component } from "react";
class Hotel_Adding_form extends Component {
  //here the hotel form
  state = {};
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlfor="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
          />
          {/* <div id="emailHelp" class="form-text">
            We'll never share Hotel email with anyone else.
          </div> */}
        </div>
        <div class="mb-3">
          <label htmlfor="star_rating" class="form-label">
            Star Rating
          </label>
          <select class="form-select" aria-label="Default select example">
            <option value="1_star">One Star</option>
            <option value="2_star Star">Two Star</option>
            <option value="3_Star">Three Star</option>
            <option value="4_star Star">Four Star</option>
            <option value="5_Star">Five Star</option>
          </select>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlfor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Hotel_Adding_form;
