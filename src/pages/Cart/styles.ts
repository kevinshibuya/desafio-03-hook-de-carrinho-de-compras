import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 15px;

    footer button {
      font-size: 0.8rem;
      max-width: 40%;
    }

    strong {
      font-size: 1.2rem!important;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 600px) {
    tr {
      border-bottom: 1px solid #eee;
      margin-bottom: 5px;
      display: flex;
    }

    td.img-wrapper {
      /* position: absolute;
      top: 5px; */
    }

    td {
      border-bottom: none!important;
      padding: 10px!important;
    }

    div.cart-wrapper {
      display: flex;
      flex-direction: column;
      align-items: start;

      div {
        align-items: start;
      }

      td {
        strong {
          font-size: 1.2rem;

          & + span {
            font-size: 1rem;
          }
        }
      }
    }

    div {
      input {
        font-size: 1rem;
      }

      button:first-child {
        padding-left: 0px;
      }
    }

    td.remove-product-wrapper {
      display: block;
      width: 100%;
      position: relative;
      margin-bottom: 20px;

      button.remove-product {
        position: absolute;
        right: 0px;
        top: -5px;
      }
    }

    thead tr {
      display: none;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
