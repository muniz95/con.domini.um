import styled from "styled-components";
import Mood from "@material-ui/icons/Mood";
import MoodBad from "@material-ui/icons/MoodBad";

export const SmileysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SadEmoji = styled(MoodBad)`
  font-size: 8pc;
  color: #faa473;
`;

export const HappyEmoji = styled(Mood)`
  font-size: 8pc;
  color: #faa473;
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
  SmileysContainer,
  SadEmoji,
  HappyEmoji,
  EmojiBox,
  Center,
  Table,
};
