import React from 'react'

import { useForm } from 'react-hook-form';


const {Group, Label, Control} = {...Form}
export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);