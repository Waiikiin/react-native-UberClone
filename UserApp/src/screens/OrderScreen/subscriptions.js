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

export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        createdAt
        updatedAt
    }
  }
`;