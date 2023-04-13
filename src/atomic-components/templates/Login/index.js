import React from 'react'
import Input from '../../atoms/Input'
import {
  Container,
  ButtonContainer,
  InputContainer,
  ButtonText,
  Centered,
} from "./styles";
import { toast } from "react-toastify";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Title } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import theme from '../../../global/styles/theme';
import { SiEpicgames } from 'react-icons/si';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (user) {
        navigate('/')
      }
      setIsSignup(!isSignup)
  };

    return (
      <Container>

      <Centered>
        <div style={{   alignSelf: 'center'}}>
          <SiEpicgames style={{ width: '100%', alignSelf: 'center'}} color={theme.colors.secondary} size={55} />
        </div>
        <InputContainer>
          {isSignup && (
            <>
              <Input
                marginBottom='20px'
                name="firstName"
                placeholder="Nome"
                onChange={(e) => setUser(e.target.value)}
                autoFocus
                half
              />
              <Input
                marginBottom='20px'
                name="lastName"
                placeholder="Sobrenome"
                
                half
              />
            </>
          )}
          <Input
            marginBottom='20px' name="email" placeholder="E-mail"  />
          <Input
            marginBottom='20px'
            type="password"
            name="password"
            placeholder="Senha"
            
          />
          {isSignup && (
            <Input
              marginBottom='20px'
              type="password"
              name="confirmPassword"
              placeholder="Confirmar"
              
              autoFocus
              half
            />
          )}
        </InputContainer>
        <ButtonContainer>
          <Button label="Login" onClick={handleSubmit} variant='secondary' />
          <ButtonText variant="white-secondary">
            <Text>
              {isSignup
                ? "Already have an account?"
                : "Don't have an account? "}
              <Text active>{isSignup ? "Sign in" : "Sign Up"}</Text>
            </Text>
          </ButtonText>
        </ButtonContainer>
      </Centered>
      {/* {user && <Navigate to="/home" state={user} replace={true} />} */}
    </Container>
    )
  }


export default Auth