import { FC, CSSProperties, useContext } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { CartContext } from '../context/cartProvider';
import { Swish } from '../../data/payment';


    const SignupSchema = Yup.object().shape({
   phoneNumber: Yup.number()
   .min(2, 'Too Short!')
   .required('Required')
   .typeError("Must be a number")
   .test('len', 'Must be 10 numbers', phoneNumber => phoneNumber!.toString().length === 9),

  }); 


     
    export const validationSwish = () => {
      const { setSwish } = useContext(CartContext)

      return (
        <div style={formStyling}>
            
        <Formik
          initialValues={{
          
            phoneNumber: '',
  
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            setSwish( values as Swish)
            
          }}
        >
          {({ errors, touched }) => (
            <>
            <Form>
              <Grid style={gridContainer}>
                  <Grid style={grid} item xs={12} sm={6}>
            
                    Tel.nummer:
                    <div style={inputForm}>
                      <Field name="phoneNumber" />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <div>{errors.phoneNumber}</div>
                      ) : null}
                    </div>
                  </Grid>
                  <Grid style={submitStyling} item xs={12} sm={6}>
                  <Button type="submit" variant="contained" color="primary">Vidare</Button>
                  
                  </Grid>
  
              </Grid>
            </Form>
            </>
          )}
        </Formik>
      </div>
                
    );
                      }
  
  const formStyling: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: 'darkgray',
  }
  
  const gridContainer: CSSProperties = {
  display: "flex", 
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",
  marginLeft: "5%",
  marginBottom: "20px", 
  width: '300px'
  }
  
  const grid: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: '90%',
  }
  
  const submitStyling: CSSProperties = {
  display: "flex",
  justifyContent: "center"
  }
  
  const inputForm: CSSProperties = {
    display: "flex",
    flexDirection: "column"
  }

  
   export default validationSwish;
  