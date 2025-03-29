import { ThumbDown, ThumbUp } from '@mui/icons-material';
import styled from 'styled-components';
import global from '../../global.style';

interface IItemCardBodyProps {
  available: boolean;
}

export const SmileysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const OfferIcon = styled(ThumbUp)`
  font-size: 8pc;
  color: ${global.primaryColor};
` as unknown as keyof JSX.IntrinsicElements;

export const NeedIcon = styled(ThumbDown)`
  font-size: 8pc;
  color: ${global.primaryColor};
` as unknown as keyof JSX.IntrinsicElements;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
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
  width: 25%;
`;

export const ItemCardBody = styled.div<IItemCardBodyProps>`
  width: 100%;
  background-color: ${(props: any) => props.available ? "green" : "red"};
  margin: 5px;
  border-radius: 5px;
`;

export const Table = styled.table`
  width: 90%;
  thead {
    tr {
      th {
        text-align: left;
        border-style: none;
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: left;
        border-style: none;
      }
    }
  }
`;

const CalendarContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  Center,
  IconBox,
  ItemCard,
  ItemCardBody,
  ItemCardContainer,
  NeedIcon,
  OfferIcon,
  SmileysContainer,
  Table,
  CalendarContainer,
};
