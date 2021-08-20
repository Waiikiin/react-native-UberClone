export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
    #   user {
    #     id
    #     username
    #     email
    #     car {
    #       id
    #       type
    #       latitude
    #       longitude
    #       heading
    #       isActive
    #       userId
    #       createdAt
    #       updatedAt
    #     }
    #     orders {
    #       nextToken
    #     }
    #     createdAt
    #     updatedAt
    #   }
    #   orders {
    #     items {
    #       id
    #       status
    #       userId
    #       carId
    #       createdAt
    #       type
    #       originLatitude
    #       originLongitude
    #       destLatitude
    #       destLongitude
    #       updatedAt
    #     }
    #     nextToken
    #   }
    #   createdAt
    #   updatedAt
    }
  }
`;

export const getCarId = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
    }
  }
`;
