export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      status
      createdAt
      userId
      carId
      type
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      updatedAt
      user {
          id
          username
          rating
        }
    }
  }
`;