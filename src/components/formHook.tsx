import React, { CSSProperties } from 'react'
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
  

  

  return (
 


    <Container>
    <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      <Group>
        <Label>
          Förnamn
        </Label>
     
        <Control type="text" placeholder="First name" {...register("First name", {
          required: {
            value: true,
            message: "You must specify your first name before moving forward"
        }, 
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: "That's not a valid name where I come from..."
        }
        })} />
   
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
        
        <Button style={submitStyling} type="submit" variant="contained" color="primary">Fortsätt</Button>
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