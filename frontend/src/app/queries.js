import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
  query Players {
    players {
      email
    }
  }
`;

export const CREATE_PLAYER = gql`
  mutation Mutation($email: String!, $refCode: String!, $validated: Boolean) {
    createPlayer(email: $email, refCode: $refCode, validated: $validated) {
      id
      email
      validated
      refCode
      createdAt
      updatedAt
    }
  }
`;