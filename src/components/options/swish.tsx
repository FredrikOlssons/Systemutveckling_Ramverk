import { FC, CSSProperties } from 'react'; 
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";


    const SignupSchema = Yup.object().shape({
   phoneNumber: Yup.number()
   .min(9, 'Too Short!')
   .max(12, 'Too Long!')
   .required('Required'),

    }); 


     
    export const validationSwish = () => (
        <div style={formStyling}>
            
        <Formik
          initialValues={{
          
            phoneNumber: '',
  
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            // DO SOMETHING HERE FOR SUBMIT :)))))))))))
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <>
            <Form>
              <Grid style={gridContainer}>
                  <Grid style={grid} item xs={12} sm={6}>
            
                  Tel.nummer:
                  <Field name="phoneNumber" />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div></div>
                  ) : null}
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
  
  
  const formStyling: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
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
  
  
  
  
   export default validationSwish;
  