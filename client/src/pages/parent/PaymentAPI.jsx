import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentAPI = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handlePaySuccess = () => {
    // Validate input fields
    if (!validateCardNumber() || !validateCVV() || !validateExpiryDate()) {
      return;
    }

    // Continue with payment success logic
    setTimeout(() => {
      toast.success("Payment successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });

      navigate('/dashboard/pay-success');
    }, 2000);
  };

  const validateCardNumber = () => {
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      alert("Invalid Credit Card Number");
      return false;
    }
    return true;
  };

  const validateCVV = () => {
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      alert("Invalid CVV");
      return false;
    }
    return true;
  };

  const validateExpiryDate = () => {
    const currentYear = new Date().getFullYear();
    if (parseInt(expiryMonth, 10) < 1 || parseInt(expiryMonth, 10) > 12) {
      alert("Invalid Expiry Month");
      return false;
    }
    if (parseInt(expiryYear, 10) < currentYear) {
      alert("Invalid Expiry Year");
      return false;
    }
    return true;
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
      </Box>

      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Box component="form">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <TextField
              label="Credit Card Number"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              inputProps={{ maxLength: 16 }}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />

            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              inputProps={{ maxLength: 3 }}
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Month"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  inputProps={{ min: 1, max: 12 }}
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Year"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  inputProps={{ min: new Date().getFullYear() }}
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={handlePaySuccess}
              fullWidth
            >
              Submit Payment
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PaymentAPI;
