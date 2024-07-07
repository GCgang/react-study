import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <FaArrowLeft />
    </Button>
  );
}

const Button = styled.button`
  color: ${(props) => props.theme.textColor};
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
`;
