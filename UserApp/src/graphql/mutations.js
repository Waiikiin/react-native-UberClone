/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
