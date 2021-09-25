import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/Box';


export default function App() {

  const [activeStep, setActiveStep] = React.useState(0)
  
  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1)
  }
  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1)
  }

  return (

    
    <div>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>SEARCH</StepLabel>
        </Step>

        <Step>
          <StepLabel>BOOKING</StepLabel>
        </Step>

        <Step>
          <StepLabel>CHECKOUT</StepLabel>
        </Step>

        <Step>
          <StepLabel>THANK YOU</StepLabel>
        </Step>
      </Stepper>
      <Button
        color="primary"
        variant="contained"
        onClick={() => nextStep()}
      >
        Next Step
      </Button>
      <br />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => previousStep()}
      >
        Previous Step
      </Button>

    
                 
 
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
 
    


      
    </div>
  );
}

