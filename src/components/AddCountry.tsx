import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import {
  countiresState,
  eCountryStatus,
  ICountry,
} from "../state/countiresState";
import styled from "styled-components";
interface IForm {
  country: string;
}
export default function AddCountry() {
  const setCountries = useSetRecoilState(countiresState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    const newCountry: ICountry = {
      name: data.country,
      status: eCountryStatus.TO_VISIT,
    };
    setCountries((oldContries) => [...oldContries, newCountry]);
    setValue("country", "");
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="이름"
        {...register("country", {
          required: "😊 required",
        })}
      />
      {errors.country && <ErrorMessage>{errors.country.message}</ErrorMessage>}
      <StyledButton>Go</StyledButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1rem;
  margin: 0px 10px;
`;
const commonStyles = `
  background-color: #0e151a;
  width: 250px;
  height: 40px;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 5px;
  border-radius: 5px;
  border: none;
  color: white;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  ${commonStyles}

  &:focus {
    border: 1px solid #007bff;
    outline: none;
  }
`;

const StyledButton = styled.button`
  ${commonStyles}
  cursor: pointer;

  &:hover {
    border: 1px solid #007bff;
  }
`;
