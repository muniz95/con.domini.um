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

export default {
  SmileysContainer,
  SadEmoji,
  HappyEmoji,
  EmojiBox,
};
