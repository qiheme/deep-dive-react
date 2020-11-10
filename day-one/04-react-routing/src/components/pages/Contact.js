import React from "react";
import {Link, Route} from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        venenatis dapibus lorem, quis viverra felis semper quis. Aliquam
        elementum sapien consequat tortor dictum vestibulum. Cras eu luctus
        lacus. Mauris eget eros est. Cras sed magna et leo fringilla consequat.
        In hac habitasse platea dictumst. Mauris ornare arcu nibh, vel
        sollicitudin arcu vulputate quis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer et tincidunt turpis, sit amet
        accumsan justo. Etiam tincidunt pretium mauris vitae volutpat. Vivamus
        bibendum venenatis lorem, non porta diam pulvinar et. Donec fringilla
        libero vel diam venenatis, ut viverra leo pharetra.
      </p>
      <Link
        to={`${props.match.url}/learn`}
        role="button"
        className="btn btn-link"
      >
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
