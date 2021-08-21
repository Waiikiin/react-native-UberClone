export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      # user {
      #   id
      #   username
      #   email
      #   car {
      #     id
      #     type
      #     latitude
      #     longitude
      #     heading
      #     isActive
      #     userId
      #     createdAt
      #     updatedAt
      #   }
      #   orders {
      #     nextToken
      #   }
      #   createdAt
      #   updatedAt
      # }
      # orders {
      #   items {
      #     id
      #     status
      #     userId
      #     carId
      #     createdAt
      #     type
      #     originLatitude
      #     originLongitude
      #     destLatitude
      #     destLongitude
      #     updatedAt
      #   }
      #   nextToken
      # }
      # createdAt
      # updatedAt
    }
  }
`;

export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      # user {
      #   id
      #   username
      #   email
      #   car {
      #     id
      #     type
      #     latitude
      #     longitude
      #     heading
      #     isActive
      #     userId
      #     createdAt
      #     updatedAt
      #   }
      #   orders {
      #     nextToken
      #   }
      #   createdAt
      #   updatedAt
      # }
      # orders {
      #   items {
      #     id
      #     status
      #     userId
      #     carId
      #     createdAt
      #     type
      #     originLatitude
      #     originLongitude
      #     destLatitude
      #     destLongitude
      #     updatedAt
      #   }
      #   nextToken
      # }
      # createdAt
      # updatedAt
    }
  }
`;