import React, { Component } from "react";
class Hotel_Adding_form extends Component {
  //here the hotel form 
  state = {};
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" class="form-label">
            Hotel Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share Hotel email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlfor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
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
