import React, { CSSProperties, useEffect, useState} from 'react'
import Form  from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useForm } from 'react-hook-form';




const {Group, Label, Control} = {...Form}

export const FormField = () =>  {
  const { register, handleSubmit } = useForm();
  //cnonst  {formState:{errors, ...formState}} = useForm();
  const onSubmit =( data: any )=> console.log(data);

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setLMobile] = useState("");
  const [postCode, setPostCode] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
 
  
  const validate = () => {
    return onSubmit;
   } //lname.length, email.length, mobile.length, postCode.length, adress.length, city.length
  
  
  useEffect(() => {
  },[validate])
 
  return (
 


    <Container>
    <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      <Group>
        <Label>
          Förnamn
        </Label>
     
        <Control type="text" placeholder="First name" value={fname}
        onChange={(e) => setFName(e.target.value) }
        
        
        
         />
   
        <Label>
          Efternamn
        </Label>
<Control  type="text" placeholder="Last name" {...register("Last name", {required: true, pattern: /^[a-zA-Z]+$/, maxLength: 100})} />
 

        <Label>
          Email
        </Label>
<Control type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

        <Label>
          Telefonnummer (endast siffror)
        </Label>
<Control  type="tel" placeholder="Mobil nummer" {...register("Mobile number", {required: true, pattern:/^[0-9+-]+$/, minLength: 6, maxLength: 12})} />
      

        <Label>
          Postkod (endast siffror)
        </Label>
<Control type="text" placeholder="Postkod"  {...register("Postkod", {required: true, pattern:/^[0-9+-]+$/, minLength: 6, maxLength: 12})} />
          
          <Label>
          Adress
        </Label>
<Control type="text" placeholder="Adress"  {...register("Adress", {required: true, pattern: /^[a-zA-Z]+$/, maxLength: 100})} />
        
<Label>
          Stad
        </Label>
<Control type="text" placeholder="Stad"  {...register("Stad", {required: true, pattern: /^[a-zA-Z]+$/, maxLength: 100})} />
        
        <Button style={submitStyling}  disabled={!validate()} type="submit" variant="contained" color="primary">Fortsätt</Button>
      </Group>
      
     
    </form></Container>
    

)}


const submitStyling: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#1976d2",
  color: "white",
  marginTop: "10px"
}