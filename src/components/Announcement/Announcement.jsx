import React from "react";
import styled from "styled-components";
import { useVacationAnnouncement } from "../../hooks/useVacationAnnouncement";

const Wrapper = styled.div`
  padding: 56px;
  align-items: center;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 24px;
  background: #fff;

  @media (max-width: 768px) {
    padding: 28px;
    font-size: 18px;
  }
`;

const Text = styled.p`
  color: #343434;
  margin: 0;
  line-height: 1.4;
  font-size: 24px;
`;

export const Announcement = () => {
  const vacation = useVacationAnnouncement();

  // Jeśli brak danych lub nieaktywne — nie pokazuj
  if (!vacation || !vacation.isActive) return null;

  return (
    <Wrapper>
      <Text>
        W dniach <b>{vacation.dateRange}</b> {vacation.message}
      </Text>
    </Wrapper>
  );
};
