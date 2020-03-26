import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Access.css";

class Access extends Component {
  render() {
    return (
      <div>
        <div className="Body">
          <div className="Title">
            <h1>Covit 19</h1>
          </div>
          <div className="Text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum in libero sit amet condimentum. Nulla vitae dolor
              velit. Proin a nisi ex. Sed rutrum blandit efficitur. Vestibulum
              aliquam leo at orci ullamcorper, a tincidunt ante cursus.
              Phasellus nec faucibus mauris. Curabitur vitae lacinia ex. Sed
              mollis tincidunt quam id sollicitudin. Sed sollicitudin mi sed
              auctor ultrices. Duis iaculis arcu dui, in rutrum lacus imperdiet
              eu. Etiam cursus dui vitae quam fermentum iaculis. Sed vel enim
              eros. Sed sodales venenatis ornare. Morbi eget congue tortor, id
              tincidunt nunc. Cras dignissim, lacus sit amet aliquet euismod,
              nibh lectus bibendum felis, eu rutrum ante leo vel velit. Maecenas
              ut dui at tortor tristique molestie eu ac leo. Donec vitae semper
              libero, a semper orci. Nulla dapibus fermentum ligula, euismod
              ultricies neque finibus at. Donec vestibulum neque ligula, at
              tincidunt leo sagittis sed. Curabitur sit amet condimentum diam.
              Curabitur risus mi, elementum quis pellentesque ut, auctor vitae
              neque. Mauris aliquet purus vel ex pharetra cursus. Nullam laoreet
              facilisis consequat. Sed maximus eget purus quis venenatis. Morbi
              vitae orci in elit convallis congue. Integer et eros viverra,
              accumsan nisl in, ornare nunc. Sed fermentum, augue eget porta
              maximus, justo turpis posuere neque, id tincidunt nisl nulla sit
              amet mauris. Sed tempor consequat purus, a placerat justo rhoncus
              quis. Nulla posuere, nisi ut blandit eleifend, velit lacus
              porttitor neque, vel commodo sem justo quis purus. Nunc efficitur
              ultricies nisl ac commodo. Donec vitae mi et nunc faucibus
              sodales. Etiam in efficitur ligula. Etiam ut nisi diam. Nullam eu
              sem iaculis, scelerisque odio eget, scelerisque metus. Nullam
              pretium eleifend viverra. Nam volutpat, ligula a lacinia
              consequat, nunc sapien euismod turpis, ac tristique est ligula nec
              velit. Integer quis mattis nunc. Nam vel nunc ac leo consectetur
              tincidunt vitae sed lacus. Nam placerat iaculis mauris, at euismod
              ante pharetra vel. Aliquam faucibus sodales turpis quis
              consectetur. Praesent dignissim mauris in quam blandit, aliquam
              laoreet arcu venenatis. Etiam diam eros, sodales vel enim eu,
              tincidunt sagittis magna. Sed dignissim felis non quam commodo,
              sed fermentum lectus bibendum.
            </p>
          </div>
        </div>
        {/* <form onSubmit={""}> */}
        <div className="Login">
          <label>Email: </label>
          <input type="text" name="email" />
          <label>Password: </label>
          <input type="text" name="password" />
          <Link to="/Worldcase">Ingresar</Link>
        </div>
        {/* </form> */}
      </div>
    );
  }
}

export default Access;
