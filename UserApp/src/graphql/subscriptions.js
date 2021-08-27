/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      status
      createdAt
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      updatedAt
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
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      rating
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      rating
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      rating
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      type
      latitude
      longitude
      heading
      isActive
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      orders {
        items {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      status
      createdAt
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      status
      createdAt
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      status
      createdAt
      userId
      user {
        id
        username
        email
        rating
        car {
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
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      updatedAt
    }
  }
`;
