import React,{ Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';



class Accueil extends Component {
  render(){
    return(
      <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>To the Left!</InputGroupText>
            </InputGroupAddon>
            <Input />
          </InputGroup>
          <br />
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
         >
            </InputGroupAddon>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
          
            </InputGroupAddon>
            <Input placeholder="and..." />
            <InputGroupAddon addonType="append">
              <InputGroupText>To the Right!</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
      </div>
    )
  }
}
   
  export default Accueil;
  