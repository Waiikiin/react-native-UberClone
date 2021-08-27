/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        createdAt
        userId
        user {
          id
          username
          email
          rating
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
      nextToken
    }
  }
`;
