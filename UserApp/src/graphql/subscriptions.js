/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
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
          userId
          carId
          createdAt
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
          userId
          carId
          createdAt
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
          userId
          carId
          createdAt
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
          userId
          carId
          createdAt
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
          userId
          carId
          createdAt
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
          userId
          carId
          createdAt
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
      userId
      user {
        id
        username
        email
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
      createdAt
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
      userId
      user {
        id
        username
        email
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
      createdAt
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
      userId
      user {
        id
        username
        email
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
      createdAt
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
