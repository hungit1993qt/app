import styled from "styled-components"; // css-in-js

export const Button = styled.button<{ disabled?: boolean }>`
  padding: 8px 12px;
  border: 1px solid;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const PrimaryButton = styled(Button)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.red};
  border-color: ${({ theme }) => theme.red};
`;
