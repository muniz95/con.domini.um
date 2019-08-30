import Mood from "@material-ui/icons/Mood";
import MoodBad from "@material-ui/icons/MoodBad";
import styled from "styled-components";
import global from "../../global.style";

export const SmileysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SadEmoji = styled(MoodBad)`
  font-size: 8pc;
  color: ${global.primaryColor};
`;

export const HappyEmoji = styled(Mood)`
  font-size: 8pc;
  color: ${global.primaryColor};
`;

export const EmojiBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ItemCardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ItemCard = styled.div`
  height: 150px;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;

export const ItemCardBody = styled.div`
  width: 100%;
  background-color: ${global.primaryColor};
  margin: 5px;
  border-radius: 5px;
`;

export const Table = styled.table`
  width: 90%;
  tbody {
    tr {
      td {
        text-align: left;
        border-style: none;
      }
    }
  }
`;

export default {
  Center,
  EmojiBox,
  HappyEmoji,
  ItemCard,
  ItemCardBody,
  ItemCardContainer,
  SadEmoji,
  SmileysContainer,
  Table,
};
